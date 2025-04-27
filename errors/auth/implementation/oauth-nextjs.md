### exemplo de autenticação OAuth com Next.js, usando a estrutura que criamos para OAuthAuthProvider.

## Esse exemplo inclui:

1. ✅ Backend em Next.js com rota de callback (/api/auth/[provider])
2. ✅ Frontend com a classe OAuthAuthProvider
3. ✅ Lógica de popup + window.postMessage para retorno do token

### 🔧 Estrutura de arquivos sugerida

```
/auth
  OAuthAuthProvider.ts
  AuthProvider.ts
/pages
  /api
    /auth
      [provider].ts         ← Rota para iniciar login com Google/GitHub/etc
    /auth/callback.ts       ← Callback OAuth (recebe token e responde ao popup)
/pages/login.tsx           ← Tela de login

```

### 🧩 1. /auth/AuthProvider.ts (abstract)

### 🧩 2. /auth/OAuthAuthProvider.ts (com Next.js support)

### 🧪 3. /pages/api/auth/[provider].ts

```
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query;

  const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`);
  
  const urls: Record<string, string> = {
    google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email`,
    // Adicione GitHub, Facebook, etc aqui
  };

  const redirectUrl = urls[provider as string];

  if (!redirectUrl) {
    return res.status(400).json({ error: 'Provider não suportado' });
  }

  res.redirect(redirectUrl);
}

```

### 🔁 4. /pages/api/auth/callback.ts

```
import type { NextApiRequest, NextApiResponse } from 'next';

// Este é um mock — em produção você faria o exchange do "code" com o Google
export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  // Aqui você trocaria o code por token no Google (mock abaixo)
  const token = 'mocked-oauth-token';
  
  res.send(`
    <script>
      window.opener.postMessage({ type: 'oauth-token', data: { token: '${token}' } }, window.origin);
      window.close();
    </script>
  `);
}

```

### 🎨 5. /pages/login.tsx

```
'use client';
import { OAuthAuthProvider } from '../auth/OAuthAuthProvider';
import { useState } from 'react';

export default function LoginPage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const loginWithGoogle = async () => {
    const auth = new OAuthAuthProvider('google');
    const result = await auth.login({});

    if (result.success) {
      setUser(result.user);
    } else {
      setError(result.error || 'Erro no login');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>Login com Google</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

```

### 📦 .env.local

```
GOOGLE_CLIENT_ID=SEU_CLIENT_ID
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
