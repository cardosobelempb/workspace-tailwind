### ✅ UUIDVO (UUID Value Object) em TypeScript:

```
export class UUIDVO {
  private readonly value: string;

  constructor(uuid?: string) {
    const finalUUID = uuid ?? UUIDVO.generate();
    
    if (!UUIDVO.isValid(finalUUID)) {
      throw new Error(`Invalid UUIDv4 format: "${finalUUID}"`);
    }

    this.value = finalUUID;
  }

  // Retorna o valor encapsulado
  public getValue(): string {
    return this.value;
  }

  // Verifica se o UUID atual é válido (útil em cenários mais flexíveis)
  public isValid(): boolean {
    return UUIDVO.isValid(this.value);
  }

  // Gera um UUIDv4 válido
  public static generate(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Valida se um UUID é v4 válido
  public static isValid(uuid: string): boolean {
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
  }
}

```

### ✅ Exemplo de uso:

```
// Criando um UUID novo automaticamente
const uuid1 = new UUIDVO();
console.log("UUID gerado:", uuid1.getValue()); // Saída: UUID válido

// Criando com um UUID existente (válido)
const uuid2 = new UUIDVO("c0a8010d-7e6a-4b22-bd90-d23e118c7433");
console.log("UUID passado:", uuid2.getValue());

// Criando com UUID inválido (vai lançar erro)
try {
  const invalid = new UUIDVO("not-a-uuid");
} catch (error) {
  console.error("Erro ao criar UUID:", error.message);
}

```

### ✅ Vantagens dessa abordagem:
* ✅ Garante que todo UUID instanciado seja válido.

* ✅ Encapsula a lógica de geração e validação.

* ✅ Evita a propagação de strings soltas no domínio.
  
#### ✅ UUIDVO com class-validator – Estilo DDD

```
import { validateSync, IsUUID } from 'class-validator';

export class UUIDVO {
  @IsUUID('4', { message: 'UUID must be a valid UUID version 4.' })
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;

    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new Error(errors[0].constraints?.isUuid || 'Invalid UUID.');
    }
  }

  // Factory method para criar um UUID novo
  public static generate(): UUIDVO {
    const uuid = UUIDVO.generateUUIDv4();
    return new UUIDVO(uuid);
  }

  // Factory method para criar a partir de um valor (útil para re-hidratar objetos)
  public static create(uuid: string): UUIDVO {
    return new UUIDVO(uuid);
  }

  // Retorna o valor primitivo
  public getValue(): string {
    return this.value;
  }

  // Método utilitário: validar sem lançar erro
  public static isValid(uuid: string): boolean {
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
  }

  // Geração de UUIDv4 puro
  private static generateUUIDv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

```

### ✅ Como usar:

```
// Criando automaticamente um UUID válido
const auto = UUIDVO.generate();
console.log('UUID gerado:', auto.getValue());

// Criando manualmente a partir de um UUID (validação embutida)
const fromDb = UUIDVO.create('d3b07384-d9a2-4f4f-bdf7-5f3b1c25fa55');
console.log('UUID da base:', fromDb.getValue());

// Tentando criar com um UUID inválido (lança erro)
try {
  UUIDVO.create('12345');
} catch (err) {
  console.error('Erro:', err.message); // → Invalid UUID.
}

```