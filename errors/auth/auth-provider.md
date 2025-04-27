### 🔐 AuthProvider.ts – Classe Abstrata de Autenticação

```
export type AuthCredentials = {
  username?: string;
  email?: string;
  password: string;
  [key: string]: any; // Para suportar autenticações personalizadas (OAuth, etc)
};

export type AuthResult = {
  success: boolean;
  token?: string;
  user?: any;
  error?: string;
};

export abstract class AuthProvider {
  /**
   * Autentica um usuário com base nas credenciais.
   */
  abstract login(credentials: AuthCredentials): Promise<AuthResult>;

  /**
   * Realiza logout do usuário atual.
   */
  abstract logout(): Promise<void>;

  /**
   * Verifica se há um usuário autenticado.
   */
  abstract isAuthenticated(): Promise<boolean>;

  /**
   * Retorna os dados do usuário autenticado, se houver.
   */
  abstract getCurrentUser(): Promise<any>;

  /**
   * Atualiza o token de acesso, se aplicável.
   */
  abstract refreshToken?(): Promise<string | null>;
}

```

### 🧩 Exemplo de implementação: JwtAuthProvider

```
import { AuthProvider, AuthCredentials, AuthResult } from './AuthProvider';

export class JwtAuthProvider extends AuthProvider {
  private token: string | null = null;
  private user: any = null;

  async login(credentials: AuthCredentials): Promise<AuthResult> {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      this.token = data.token;
      this.user = data.user;

      return { success: true, token: data.token, user: data.user };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  async logout(): Promise<void> {
    this.token = null;
    this.user = null;
  }

  async isAuthenticated(): Promise<boolean> {
    return !!this.token;
  }

  async getCurrentUser(): Promise<any> {
    return this.user;
  }

  async refreshToken(): Promise<string | null> {
    // Suporte opcional, depende do backend
    return null;
  }
}

```

### 📦 Como usar:

```
const auth = new JwtAuthProvider();

const result = await auth.login({ email: 'user@test.com', password: '123456' });
if (result.success) {
  console.log('Usuário logado:', await auth.getCurrentUser());
} else {
  console.error('Erro ao autenticar:', result.error);
}

```

### 🌐 OAuthAuthProvider.ts – Implementação OAuth 2.0

```
import { AuthProvider, AuthCredentials, AuthResult } from './AuthProvider';

export class OAuthAuthProvider extends AuthProvider {
  private token: string | null = null;
  private user: any = null;

  constructor(private provider: 'google' | 'github' | 'facebook') {
    super();
  }

  async login(_: AuthCredentials): Promise<AuthResult> {
    try {
      const oauthUrl = `/auth/${this.provider}`;
      const popup = window.open(oauthUrl, '_blank', 'width=600,height=600');

      if (!popup) {
        throw new Error('Não foi possível abrir a janela de autenticação.');
      }

      // Espera o token via window message (cross-window communication)
      const token: string = await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject('Timeout no login'), 60000);

        window.addEventListener('message', function handler(event) {
          if (event.origin !== window.location.origin) return;

          const { type, data } = event.data;
          if (type === 'oauth-token') {
            clearTimeout(timeout);
            window.removeEventListener('message', handler);
            resolve(data.token);
          }
        });
      });

      this.token = token;

      const userResponse = await fetch('/api/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userResponse.ok) throw new Error('Erro ao buscar dados do usuário.');

      this.user = await userResponse.json();

      return { success: true, token: this.token, user: this.user };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  async logout(): Promise<void> {
    this.token = null;
    this.user = null;
    // Opcional: redirecionar para logout do provedor OAuth
  }

  async isAuthenticated(): Promise<boolean> {
    return !!this.token;
  }

  async getCurrentUser(): Promise<any> {
    return this.user;
  }

  async refreshToken(): Promise<string | null> {
    return null; // Implementar se backend der suporte
  }
}

```