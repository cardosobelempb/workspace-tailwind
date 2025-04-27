
### 🗂️ 1. locales.ts – Mensagens de erro

```
export const messages = {
  pt: {
    EMPTY: 'A descrição não pode estar vazia.',
    TOO_LONG: 'A descrição não pode ter mais que 500 caracteres.',
  },
  en: {
    EMPTY: 'Description cannot be empty.',
    TOO_LONG: 'Description cannot be longer than 500 characters.',
  },
};

```

### ✅ 2. DescriptionVO.ts (Value Object)

```
import { messages } from './locales';

export class Description {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string, lang: 'pt' | 'en' = 'en'): Description {
    const msg = messages[lang];

    if (!value || value.trim().length === 0) {
      throw new Error(msg.EMPTY);
    }

    if (value.length > 500) {
      throw new Error(msg.TOO_LONG);
    }

    return new Description(value.trim());
  }

  public getValue(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }
}

```

### 👇 Exemplo de uso dos dois:

```
try {
  const desc = Description.create('', 'pt');
} catch (error) {
  console.error(error.message); // A descrição não pode estar vazia.
}
const descEn = Description.create('Valid description', 'en');
console.log(descEn.getValue()); // Valid description

```