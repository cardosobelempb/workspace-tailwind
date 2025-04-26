### ✅ SlugVO (Data + Hora combinados)

```
export class SlugVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Slug {
    return new Slug(value);
  }

  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '');

    if (!slugText || slugText.length < 3) {
      throw new Error("Slug must be at least 3 characters.");
    }

    if (slugText.length > 100) {
      throw new Error("Slug must be less than 100 characters.");
    }

    return new Slug(slugText);
  }

  public getValue(): string {
    return this.value;
  }
}


```
### 🧪 Exemplo de uso:

```
const slug = Slug.createFromText("Olá mundo!!! com acentos e espaço");
console.log(slug.getValue()); // "ola-mundo-com-acentos-e-espaco"


```

### 🎯 Resumo:

* ✅ Estrutura muito boa e funcional
* 🛡️ Pode ficar mais segura com validações de vazio, comprimento, e getter
* 🧼 Pode evoluir facilmente para ser usada com entities, URLs, etc.
  
### ✅ O que está bom:

* createFromText normaliza muito bem os caracteres (acentos, espaços, pontuações).
* Uso de .normalize('NFKD') + regex é bem completo pra limpar caracteres especiais.
* O construtor está encapsulado (usando private) — isso é ótimo para garantir que o slug sempre é criado da forma esperada.
* create() serve como forma direta de instanciar o slug, caso você já tenha ele.