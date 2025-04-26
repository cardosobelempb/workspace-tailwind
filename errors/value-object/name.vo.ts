interface NameOptions {
  minLength?: number;
  maxLength?: number;
}

export class NameVO {
  private readonly value: string;

  constructor(name: string, options: NameOptions = {}) {
    const min = options.minLength ?? 2;
    const max = options.maxLength ?? 50;

    this.validate(name, min, max);
    this.value = name;
  }

  private validate(name: string, min: number, max: number): void {
    if (!name || name.trim().length === 0) {
      throw new Error("Name cannot be empty.");
    }

    if (name.length < min) {
      throw new Error(`Name must be at least ${min} characters.`);
    }

    if (name.length > max) {
      throw new Error(`Name must be at most ${max} characters.`);
    }

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    if (!nameRegex.test(name)) {
      throw new Error(
        "Name can only contain letters, spaces, apostrophes, and hyphens."
      );
    }
  }

  public getValue(): string {
    return this.value;
  }
}
