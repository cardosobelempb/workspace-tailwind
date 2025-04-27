import { AuthProvider, AuthCredentials, AuthResult } from "../auth-provider";

export class OAuthAuthProvider extends AuthProvider {
  private token: string | null = null;
  private user: any = null;

  constructor(private provider: "google" | "github" | "facebook") {
    super();
  }

  async login(_: AuthCredentials): Promise<AuthResult> {
    try {
      const oauthUrl = `/auth/${this.provider}`;
      const popup = window.open(oauthUrl, "_blank", "width=600,height=600");

      if (!popup) {
        throw new Error("Não foi possível abrir a janela de autenticação.");
      }

      // Espera o token via window message (cross-window communication)
      const token: string = await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject("Timeout no login"), 60000);

        window.addEventListener("message", function handler(event) {
          if (event.origin !== window.location.origin) return;

          const { type, data } = event.data;
          if (type === "oauth-token") {
            clearTimeout(timeout);
            window.removeEventListener("message", handler);
            resolve(data.token);
          }
        });
      });

      this.token = token;

      const userResponse = await fetch("/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userResponse.ok) throw new Error("Erro ao buscar dados do usuário.");

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
