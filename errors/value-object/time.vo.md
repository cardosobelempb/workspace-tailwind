### ✅ 2. TimeVO (Value Object para hora)

```
class TimeVO {
  private readonly value: string;

  constructor(time: string) {
    this.value = this.validate(time);
  }

  private validate(time: string): string {
    const regex = /^([01]\d|2[0-3]):[0-5]\d$/;

    if (!regex.test(time)) {
      throw new Error("Time must be in 24h format HH:mm.");
    }

    return time;
  }

  public getValue(): string {
    return this.value; // returns HH:mm
  }

  public getHours(): number {
    return parseInt(this.value.split(":")[0]);
  }

  public getMinutes(): number {
    return parseInt(this.value.split(":")[1]);
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