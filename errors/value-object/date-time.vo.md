### ✅ DateTimeVO (Data + Hora combinados)

```
class DateTimeVO {
  private readonly dateVO: DateVO;
  private readonly timeVO: TimeVO;

  constructor(date: string, time: string) {
    this.dateVO = new DateVO(date);
    this.timeVO = new TimeVO(time);
  }

  public getISO(): string {
    const date = this.dateVO.getValue(); // YYYY-MM-DD
    const time = this.timeVO.getValue(); // HH:mm
    return `${date}T${time}:00`; // ISO format: YYYY-MM-DDTHH:mm:00
  }

  public getDate(): Date {
    return new Date(this.getISO());
  }

  public getDateValue(): string {
    return this.dateVO.getValue();
  }

  public getTimeValue(): string {
    return this.timeVO.getValue();
  }
}

```
### 👇 Exemplo de uso:

```
try {
  const dateTime = new DateTimeVO("2025-04-26", "14:30");

  console.log("ISO:", dateTime.getISO()); // 2025-04-26T14:30:00
  console.log("Date:", dateTime.getDateValue()); // 2025-04-26
  console.log("Time:", dateTime.getTimeValue()); // 14:30
  console.log("As Date object:", dateTime.getDate()); // Date instance
} catch (error) {
  console.error(error);
}

```

### 🎯 Benefícios:

* Reutiliza a lógica já validada em DateVO e TimeVO
* Garante que a combinação seja segura e bem formatada
* Ideal para agendamentos, logs, eventos, etc.