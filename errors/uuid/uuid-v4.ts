// Função para gerar um UUID versão 4
export const UUIDV4 = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Geração do número aleatório (0-15)
    const v = c === "x" ? r : (r & 0x3) | 0x8; // O "y" deve ser entre 8 e b (ou seja, bits 8..11)
    return v.toString(16); // Retorna o valor como hexadecimal
  });
};

// Função para validar se o UUID gerado é válido
export const isValidUUIDV4 = (uuid: string): boolean => {
  // Regex para validar o formato do UUID versão 4
  const regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid); // Verifica se a string corresponde ao padrão UUIDv4
};

// Exemplo de uso:

const generatedUUID = UUIDV4();
console.log(`UUID gerado: ${generatedUUID}`);
console.log(`O UUID gerado é válido? ${isValidUUIDV4(generatedUUID)}`);
