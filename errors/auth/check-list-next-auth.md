### ✅ Checklist de Implementação do NextAuth com TypeScript

1. Instalar as dependências
* Instale o next-auth e qualquer outro pacote necessário (por exemplo, @types/next-auth para tipagem do TypeScript):

```
npm install next-auth
npm install @types/next-auth --save-dev


```
2. Criar o arquivo de configuração do NextAuth
* Crie o arquivo de configuração do NextAuth no diretório pages/api/auth/[...nextauth].ts.

```
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Outros provedores, como GitHub, Facebook, etc.
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/auth/signin', // Página customizada para login, opcional
  },
  session: {
    jwt: true, // Usando JWT para a sessão
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id; // Adicionando ID do usuário à sessão
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Armazenando o ID do usuário no token
      }
      return token;
    },
  },
});


```
3. Configurar variáveis de ambiente
* Crie um arquivo .env.local na raiz do projeto e adicione as variáveis necessárias para os provedores e para o NextAuth.
  
```
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_chave_secreta_gerada

```
* Gerar chave secreta para NEXTAUTH_SECRET:

* Você pode gerar uma chave secreta com o seguinte comando:
```
{
  openssl rand -base64 32
}

```
4. Configurar provedores (exemplo com Google)
* Certifique-se de que você está configurando corretamente os provedores de autenticação no arquivo NextAuth. O exemplo acima mostra como configurar o Google, mas você pode adicionar outros provedores, como GitHub, Facebook, etc.

```
// Exemplo de provedor do Google
Providers.Google({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
}),


```
5. Criação da página de login personalizada (opcional)
* O NextAuth já tem uma página de login padrão, mas você pode criar uma página de login personalizada.

* tsx
* Copiar
* Editar


```
// pages/auth/signin.tsx
import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div>
      <h1>Faça Login</h1>
      <button onClick={() => signIn('google')}>Entrar com Google</button>
    </div>
  );
}


```

* Certifique-se de que o parâmetro pages.signIn no arquivo de configuração aponta para a página personalizada, se necessário.
  
6. Configurar sessões (JWT ou Banco de Dados)
O NextAuth permite que você use JWT (JSON Web Token) ou armazene as sessões em um banco de dados.

Se você optar por JWT, como no exemplo acima, adicione a configuração session: { jwt: true }.

Caso queira armazenar as sessões em banco de dados, configure o adaptador de banco de dados, como o Prisma ou o MongoDB.
  
```
// Exemplo de configuração com Prisma (usando banco de dados para sessões)
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    jwt: false, // Usando banco de dados para sessão
  },
});


```
7. Adicionar tipos do NextAuth para TypeScript
* Para aproveitar ao máximo o TypeScript com NextAuth, crie um arquivo next-auth.d.ts para estender as definições de tipos do NextAuth, adicionando tipos para o usuário e sessão.
  
```
// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string; // Adicione o ID do usuário à sessão
      email: string;
      name: string;
      image: string;
    };
  }

  interface User {
    id: string; // Adicionando o ID do usuário ao objeto User
    email: string;
    name: string;
    image: string;
  }
}


```

8. Usar a sessão no frontend
* Para acessar a sessão no frontend, você pode usar o hook useSession do NextAuth.
```
// Exemplo de componente de HomePage
import { useSession, signOut } from 'next-auth/react';

const HomePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <a href="/auth/signin">Fazer login</a>;
  }

  return (
    <div>
      <h1>Bem-vindo, {session.user.name}</h1>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
};

export default HomePage;


```

9. Testar login/logout e gerenciamento de sessão
* Login: Acesse a página de login e faça login com o provedor escolhido (Google, GitHub, etc).

* Sessão: Verifique se o usuário está sendo armazenado corretamente e se você consegue acessar as informações da sessão.

* Logout: Teste o fluxo de logout, que pode ser feito usando signOut do NextAuth.

10. Manter as rotas protegidas
* Você pode proteger rotas de página no Next.js usando getSession ou useSession.
```
// Exemplo de página protegida (requisição no servidor)
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}


```

11. Outras considerações
* Adapte para múltiplos provedores: Se precisar de mais provedores de autenticação (como Facebook, GitHub, etc), adicione as configurações necessárias no arquivo de configuração do NextAuth.

* Proteção adicional (Auth0, JWT): Se você precisar de uma camada extra de segurança, considere usar provedores de autenticação como o Auth0 ou configurar JWT de maneira mais avançada.

* Verificação de e-mail: Você pode configurar a verificação de e-mail para garantir que os usuários confirmem suas contas antes de efetuar o login.

### 📑 Resumo das etapas:

* Instalar dependências
* Criar a configuração do NextAuth
* Configurar provedores de autenticação
* Criar variáveis de ambiente
* Criar página de login personalizada
* Configurar sessões (JWT ou Banco)
* Usar sessões no frontend com useSession
* Proteger rotas com getSession
* Testar o fluxo de login/logout
* Adicionar tipos personalizados para o NextAuth