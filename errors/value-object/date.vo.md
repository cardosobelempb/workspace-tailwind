### ✅ 1. DateVO (Value Object para data)

```
class DateVO {
  private readonly value: Date;

  constructor(dateString: string) {
    this.value = this.validate(dateString);
  }

  private validate(dateString: string): Date {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format. Use YYYY-MM-DD.");
    }

    const iso = dateString.split("T")[0];
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(iso)) {
      throw new Error("Date must be in format YYYY-MM-DD.");
    }

    return new Date(iso); // strips time
  }

  public getValue(): string {
    return this.value.toISOString().split("T")[0]; // returns YYYY-MM-DD
  }

  public getDate(): Date {
    return this.value;
  }
}

```

### 👇 Exemplo de uso dos dois:

```
try {
  const date = new DateVO("2025-04-26");
  const time = new TimeVO("14:30");

  console.log("Date:", date.getValue()); // 2025-04-26
  console.log("Time:", time.getValue()); // 14:30
} catch (error) {
  console.error(error);
}

```