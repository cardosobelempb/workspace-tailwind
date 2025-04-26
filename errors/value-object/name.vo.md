### ✅ 1. NameVO (Value Object para name)

```
class Name {
  private readonly value: string;

  constructor(name: string) {
    this.validate(name);
    this.value = name;
  }

  private validate(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error("Name cannot be empty.");
    }

    if (name.length < 2 || name.length > 50) {
      throw new Error("Name must be between 2 and 50 characters.");
    }

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nameRegex.test(name)) {
      throw new Error("Name can only contain letters and spaces.");
    }
  }

  public getValue(): string {
    return this.value;
  }
}


```

### 🔍 Exemplo de uso:

```
try {
  const name = new Name("João da Silva");
  console.log(name.getValue()); // "João da Silva"
} catch (error) {
  console.error(error);
}

```