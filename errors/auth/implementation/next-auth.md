### exemplo completo de autenticação usando NextAuth.js, que é a forma mais simples e robusta de implementar OAuth (Google, GitHub, etc) no Next.js.

### ✅ O que vamos montar:

* 🔐 Login com Google usando next-auth
* 📦 Persistência com JWT (sem banco, mas fácil de integrar)
* 🧩 Página de login customizada (usando signIn)
* 📂 Organização padrão com /app ou /pages (vou usar a versão com /pages por compatibilidade)

### 📦 Instalação

```
npm install next-auth

```

### 🗂️ Estrutura dos arquivos: 

```
/pages
  /api
    /auth
      [...nextauth].ts     ← Configuração do NextAuth
  /login.tsx               ← Página de login customizada

```
### 🔐 1. /pages/api/auth/[...nextauth].ts

```
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.email = profile.email;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.picture = token.picture as string;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };

```

### 🌐 2. /pages/login.tsx

```
import { getProviders, signIn } from 'next-auth/react';

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}

export default function LoginPage({ providers }: any) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Entrar com {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

```

### 🧪 3. Exemplo de uso com useSession()

```
// pages/index.tsx
import { useSession, signOut } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return <a href="/login">Fazer login</a>;
  }

  return (
    <div>
      <h2>Bem-vindo, {session.user?.name}</h2>
      <img src={session.user?.image ?? ''} width={50} />
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}

```

### 📁 .env.local

```
GOOGLE_CLIENT_ID=SEU_CLIENT_ID_DO_GOOGLE
GOOGLE_CLIENT_SECRET=SEU_CLIENT_SECRET_DO_GOOGLE
NEXTAUTH_SECRET=uma-chave-secreta-gerada
NEXTAUTH_URL=http://localhost:3000

```

### Você pode gerar uma chave secreta com:

```
openssl rand -base64 32

```

### ✅ Vantagens do next-auth

* Login com múltiplos provedores (Google, GitHub, Email, etc)
* Session e JWT automáticos
* Fácil integração com banco (PostgreSQL, Mongo, etc)
* Requisições protegidas com getSession() no backend