import { AuthProvider, AuthCredentials, AuthResult } from "../auth-provider";

export class OAuthAuthProvider extends AuthProvider {
  private token: string | null = null;
  private user: any = null;

  constructor(private provider: string) {
    super();
  }

  async login(_: AuthCredentials): Promise<AuthResult> {
    try {
      const oauthUrl = `/api/auth/${this.provider}`;
      const popup = window.open(oauthUrl, "_blank", "width=600,height=600");

      if (!popup) throw new Error("Falha ao abrir o popup");

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
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!userResponse.ok) throw new Error("Erro ao buscar usuário");

      this.user = await userResponse.json();
      return { success: true, token, user: this.user };
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
    if (!this.token) return null;

    try {
      const response = await fetch(`/api/auth/${this.provider}/refresh`, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (!response.ok) throw new Error("Erro ao atualizar o token");

      const data = await response.json();
      this.token = data.token;
      return this.token;
    } catch (error) {
      console.error("Erro ao atualizar o token:", error);
      this.token = null;
      return null;
    }
  }
}
