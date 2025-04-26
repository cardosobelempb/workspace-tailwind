### ✅ 1. PasswordVO (Value Object para password)

```
interface PasswordOptions {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireDigit?: boolean;
  requireSpecialChar?: boolean;
}

class Password {
  private readonly value: string;

  constructor(password: string, options: PasswordOptions = {}) {
    const {
      minLength = 8,
      maxLength = 64,
      requireUppercase = true,
      requireLowercase = true,
      requireDigit = true,
      requireSpecialChar = true,
    } = options;

    this.validate(password, {
      minLength,
      maxLength,
      requireUppercase,
      requireLowercase,
      requireDigit,
      requireSpecialChar,
    });

    this.value = password;
  }

  private validate(password: string, options: Required<PasswordOptions>): void {
    const { minLength, maxLength, requireUppercase, requireLowercase, requireDigit, requireSpecialChar } = options;

    if (!password || password.trim().length === 0) {
      throw new Error("Password cannot be empty.");
    }

    if (password.length < minLength) {
      throw new Error(`Password must be at least ${minLength} characters.`);
    }

    if (password.length > maxLength) {
      throw new Error(`Password must be at most ${maxLength} characters.`);
    }

    if (requireUppercase && !/[A-Z]/.test(password)) {
      throw new Error("Password must include at least one uppercase letter.");
    }

    if (requireLowercase && !/[a-z]/.test(password)) {
      throw new Error("Password must include at least one lowercase letter.");
    }

    if (requireDigit && !/\d/.test(password)) {
      throw new Error("Password must include at least one number.");
    }

    if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>_\-\\[\];'/+=~`]/.test(password)) {
      throw new Error("Password must include at least one special character.");
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
  const password = new Password("Strong@123", {
    minLength: 8,
    maxLength: 20,
    requireDigit: true,
    requireSpecialChar: true
  });

  console.log(password.getValue()); // "Strong@123"
} catch (error) {
  console.error(error);
}

```