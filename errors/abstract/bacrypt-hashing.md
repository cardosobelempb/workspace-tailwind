Passos:
1. Instalar bcryptjs: Se você ainda não tiver o pacote bcryptjs instalado, execute o seguinte comando

```
npm install bcryptjs

```
2. Criar a classe abstrata e implementações concretas:

* Código da Classe Abstrata
  
```
import bcrypt from 'bcryptjs';

abstract class BcryptHashing {
  // Método abstrato para ser implementado em subclasses
  public abstract hashPassword(password: string, saltRounds?: number): Promise<string>;

  // Método abstrato para ser implementado em subclasses
  public abstract verifyPassword(password: string, hash: string): Promise<boolean>;

  // Método para gerar o salt, pode ser utilizado pelas subclasses
  protected generateSalt(saltRounds: number = 10): string {
    return bcrypt.genSaltSync(saltRounds); // Gerando o salt
  }
}

class BcryptHasher extends BcryptHashing {
  // Implementação do método hashPassword
  public async hashPassword(password: string, saltRounds: number = 10): Promise<string> {
    const salt = this.generateSalt(saltRounds); // Gerar o salt
    const hash = await bcrypt.hash(password, salt); // Gerar o hash da senha com o salt
    return hash;
  }

  // Implementação do método verifyPassword
  public async verifyPassword(password: string, hash: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hash); // Verificar se a senha bate com o hash
    return match;
  }
}

export { BcryptHasher, BcryptHashing };

```

### Explicação:

1. Classe Abstrata BcryptHashing:

* A classe BcryptHashing é abstrata e fornece uma interface genérica para os métodos de hashPassword e verifyPassword.

* Ela tem um método generateSalt que cria o salt para o bcrypt, e esse método pode ser utilizado nas classes concretas que estendem BcryptHashing.

* O método hashPassword e o verifyPassword são abstratos, ou seja, eles precisam ser implementados em qualquer classe que estenda BcryptHashing.

2. Classe Concreta BcryptHasher:

* A classe BcryptHasher estende a classe abstrata BcryptHashing e fornece implementações específicas para os métodos hashPassword e verifyPassword.

* O método hashPassword gera um hash de uma senha usando o bcrypt.hash, e o método verifyPassword compara a senha fornecida com o hash.

* A implementação do método generateSalt é reutilizada para criar o salt para o processo de hashing.

* Como Usar a Classe BcryptHasher:
* Agora, você pode usar a classe BcryptHasher para gerar hashes e verificar senhas em seu código:

```
import { BcryptHasher } from './BcryptHasher';

async function run() {
  const password = 'MySecurePassword123!';
  
  // Instanciando o BcryptHasher
  const bcryptHasher = new BcryptHasher();

  // Gerando o hash da senha
  const hashedPassword = await bcryptHasher.hashPassword(password, 12); // SaltRounds = 12
  console.log('Hash gerado:', hashedPassword);

  // Verificando a senha
  const isPasswordValid = await bcryptHasher.verifyPassword(password, hashedPassword);
  console.log('Senha válida?', isPasswordValid);  // Esperado: true
}

run();

```

### Explicação do Exemplo de Uso:

1. Instanciando a classe BcryptHasher:

Usamos a classe BcryptHasher para realizar o hashing da senha e a verificação da senha.

2. Gerando o Hash da Senha:

O método hashPassword gera um hash da senha com o número de rounds especificado (no exemplo, usamos 12 como salt rounds).

O hash gerado será armazenado e pode ser usado para comparação.

3. Verificando a Senha:

O método verifyPassword compara a senha fornecida com o hash gerado. Se a senha for válida, retornará true, caso contrário, retornará false.

### Vantagens de usar uma classe abstrata:

* Extensibilidade: Ao usar uma classe abstrata, você pode facilmente criar implementações personalizadas de hashing com diferentes algoritmos ou comportamentos.

* Reusabilidade: O código de hashing comum (como a geração do salt) pode ser reutilizado entre várias implementações.

* Manutenção: Você pode centralizar as funcionalidades de hashing em uma única classe abstrata e manter a lógica de segurança.

* Agora, você tem uma implementação flexível e extensível do bcrypt em TypeScript, usando uma abordagem orientada a objetos com classes abstratas.