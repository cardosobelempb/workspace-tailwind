import { AuthProvider, AuthCredentials, AuthResult } from "../auth-provider";

export class JwtAuthProvider extends AuthProvider {
  private token: string | null = null;
  private user: any = null;

  async login(credentials: AuthCredentials): Promise<AuthResult> {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
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
