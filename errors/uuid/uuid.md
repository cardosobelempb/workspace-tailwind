### UUIDV4

```
// Função para gerar um UUID versão 4
export const AppUUIDV4 = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Geração do número aleatório (0-15)
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // O "y" deve ser entre 8 e b (ou seja, bits 8..11)
    return v.toString(16); // Retorna o valor como hexadecimal
  });
};

// Função para validar se o UUID gerado é válido
export const isValidUUIDV4 = (uuid: string): boolean => {
  // Regex para validar o formato do UUID versão 4
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid); // Verifica se a string corresponde ao padrão UUIDv4
};

// Exemplo de uso:

const generatedUUID = AppUUIDV4();
console.log(`UUID gerado: ${generatedUUID}`);
console.log(`O UUID gerado é válido? ${isValidUUIDV4(generatedUUID)}`);

```

### Explicação do código:
1. Geração do UUID (AppUUIDV4):

* A função AppUUIDV4 gera um UUID versão 4, onde o formato é "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx". A função replace substitui os caracteres x e y com valores aleatórios:

* Para x: é gerado um valor aleatório entre 0 e 15 (hexadecimal).

* Para y: é gerado um valor aleatório entre 8 e 11 (ou seja, os valores 8, 9, a, ou b).

2. Validação do UUID (isValidUUIDV4):

* A função isValidUUIDV4 utiliza uma expressão regular para garantir que o UUID gerado tenha o formato adequado:

* O primeiro bloco (8 caracteres hexadecimais).

* O segundo bloco (4 caracteres hexadecimais).

* O terceiro bloco começa com 4 (que identifica a versão 4 do UUID).

* O quarto bloco começa com um dos valores válidos para o y (8, 9, a, b).

* O último bloco tem 12 caracteres hexadecimais.

3. Uso do código:

* Geramos um UUID usando a função AppUUIDV4 e, em seguida, validamos se o UUID gerado é válido usando a função isValidUUIDV4.

### Exemplo de saída no console:

```
UUID gerado: f85e5b67-7c3c-4a45-bc6a-bfbbeb1a5b27
O UUID gerado é válido? true

```

### ✅ Classe UUIDV4 com geração e validação

```
export class UUIDV4 {
  // Gera um UUIDv4
  public static generate(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Valida se o UUID fornecido é um UUIDv4 válido
  public static isValid(uuid: string): boolean {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
  }
}

```

### ✅ Como usar

```
UUID gerado: d7280f26-e4bd-4f15-91b5-3bfa12ff1899
É válido? true

```

### ✅ Saída esperada

```
UUID gerado: d7280f26-e4bd-4f15-91b5-3bfa12ff1899
É válido? true

```