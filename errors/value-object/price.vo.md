
### 🗂️ 1. locales.ts – Mensagens de erro

```
export const messages = {
  pt: {
    PRICE_EMPTY: "O preço não pode estar vazio.",
    PRICE_NEGATIVE: "O preço não pode ser negativo.",
    PRICE_INVALID: "O preço deve ser um número válido.",
  },
  en: {
    PRICE_EMPTY: "Price cannot be empty.",
    PRICE_NEGATIVE: "Price cannot be negative.",
    PRICE_INVALID: "Price must be a valid number.",
  },
};

```

### ✅ 2. PriceVO.ts (Value Object)

```
import { messages } from "./locales";

type SupportedLang = "pt" | "en";
type PriceOptions = {
  lang?: SupportedLang;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export class PriceVO {
  private readonly value: number;
  private readonly currency: string;

  private constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }

  public static create(
    input: string | number,
    options: PriceOptions = { lang: "en", currency: "USD" }
  ): PriceVO {
    const { lang = "en", currency = "USD" } = options;
    const msg = messages[lang];

    if (!PriceVO.isCurrencySupported(currency)) {
      throw new Error(
        msg.PRICE_UNSUPPORTED_CURRENCY?.replace("{currency}", currency) ??
          `Unsupported currency: ${currency}`
      );
    }

    if (input === null || input === undefined || input === "") {
      throw new Error(msg.EMPTY);
    }

    let numericValue: number;

    if (typeof input === "string") {
      const cleaned = input.replace(/[^\d,.-]/g, "").replace(",", ".");
      numericValue = parseFloat(cleaned);
    } else {
      numericValue = input;
    }

    if (isNaN(numericValue)) {
      throw new Error(msg.PRICE_INVALID);
    }

    if (numericValue < 0) {
      throw new Error(msg.PRICE_NEGATIVE);
    }

    return new PriceVO(numericValue, currency);
  }

  public getValue(): number {
    return this.value;
  }

  public format(options: PriceOptions = {}): string {
    const {
      lang = "en",
      currency = this.currency,
      minimumFractionDigits = 2,
      maximumFractionDigits = 2,
    } = options;

    return new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", {
      style: "currency",
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(this.value);
  }

  public toString(): string {
    return this.format();
  }

  private static isCurrencySupported(currency: string): boolean {
    try {
      new Intl.NumberFormat("en-US", { style: "currency", currency }).format(1);
      return true;
    } catch {
      return false;
    }
  }
}




```

### 👇 Exemplo de uso:

```
const p1 = Price.create('R$ 49,90', { lang: 'pt', currency: 'BRL' });
console.log(p1.getValue());         // 49.9
console.log(p1.format());           // R$ 49,90
console.log(p1.format({ lang: 'en' })); // BRL 49.90

const p2 = Price.create('€1.234,56', { lang: 'pt', currency: 'EUR' });
console.log(p2.format({ lang: 'pt', currency: 'EUR' })); // € 1.234,56

const p3 = Price.create(1000, { currency: 'USD' });
console.log(p3.format({ lang: 'en', minimumFractionDigits: 0 })); // $1,000

try {
  const price = Price.create(100, { currency: 'ABC', lang: 'pt' });
} catch (e) {
  console.error(e.message); // A moeda "ABC" não é suportada.
}

```