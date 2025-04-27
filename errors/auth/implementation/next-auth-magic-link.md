### email mágico (Magic Link) com NextAuth.js.

### ✅ O que vamos montar:

* Autenticação por email mágico com NextAuth.
* Envio de email com um link único para autenticação.
* Configuração do NextAuth para utilizar o email mágico.
* Página de login onde o usuário insere seu email.
* Página de callback onde o usuário clica no link enviado para seu email e é autenticado.

### 📦 Instalação

* Primeiro, você precisará instalar o next-auth e o nodemailer para enviar os emails:
  
```
npm install next-auth nodemailer

```
### 🗂️ Estrutura dos arquivos:

```
/pages
  /api
    /auth
      [...nextauth].ts      ← Configuração do NextAuth
  /login.tsx                ← Página de login com o email mágico
  /api
    /auth
      sendMagicLink.ts      ← Endpoint para enviar o link mágico

```
### 🔐 1. /pages/api/auth/[...nextauth].ts

* Aqui vamos configurar o NextAuth para autenticação via email mágico. O NextAuth tem um Email Provider nativo para enviar emails com links mágicos.

```
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: 'smtp.mailtrap.io', // Ou qualquer servidor SMTP
        port: 587,
        auth: {
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

```

### 📧 2. Envio do Email Mágico

* Para enviar o link mágico para o usuário, vamos configurar o serviço de envio de email. Aqui usamos o Nodemailer para enviar o email de forma customizada.
* Crie o arquivo sendMagicLink.ts:

```
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email não fornecido' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });

  const magicLink = `${process.env.NEXTAUTH_URL}/api/auth/callback/email?token=magiclink-token`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: 'Seu link mágico de login',
      html: `<p>Clique no link abaixo para fazer login:</p><p><a href="${magicLink}">Entrar</a></p>`,
    });
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
}

```

### 📝 3. Página de login – /pages/login.tsx
* Aqui vamos permitir que o usuário insira seu email e receba o link mágico para login.
  
```
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/auth/sendMagicLink', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro desconhecido');
      }

      setSuccessMessage('Link mágico enviado! Verifique seu email.');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <h1>Login com Email Mágico</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <button onClick={handleLogin}>Enviar link mágico</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

```

### 📧 4. Configuração do Envio de Email no .env.local

```
EMAIL_USER=seu_usuario_smtp
EMAIL_PASSWORD=seu_smtp_password
EMAIL_FROM=seu_email@dominio.com
NEXTAUTH_URL=http://localhost:3000

```
* Você pode usar o Mailtrap para testar emails durante o desenvolvimento. Basta criar uma conta e usar as credenciais SMTP fornecidas.

### 🌐 5. Página de Callback de Login

### ✅ Como funciona:

1. Página de Login (/login.tsx): O usuário insere seu email e clica no botão para enviar o link mágico.

2. Envio do Link: O sendMagicLink.ts envia o link para o email do usuário com um token que permite o login.

3. Autenticação: O usuário clica no link recebido e é autenticado automaticamente via NextAuth.

### 🌟 Teste
1. Acesse a página /login e insira seu email.

2. Verifique seu email e clique no link mágico para fazer login.

