### 🎯 Objetivo

* Criar um tipo JwtPayload fortemente tipado

* Usá-lo no @User() decorator

* Ideal pra quando você autentica via JWT (passport-jwt, @nestjs/jwt, etc.)

### ✅ Etapa 1: definir um payload centralizado
* Crie um tipo (ou interface) com os dados que você insere no token.

* auth/interfaces/jwt-payload.interface.ts

```
export interface JwtPayload {
  sub: string;              // ID do usuário (por padrão, no campo `sub`)
  email: string;
  role: 'admin' | 'user';   // exemplo de roles
  name: string;
  iat?: number;
  exp?: number;
}

```
### 🔎 Isso é o que você insere no token ao logar, tipo:

```
this.jwtService.sign({
  sub: user.id,
  email: user.email,
  role: user.role,
  name: user.name,
});

```

### ✅ Etapa 2: use o tipo no @User() decorator

```
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';

export const User = createParamDecorator(
  (data: keyof JwtPayload | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload | undefined;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    return data ? user[data] : user;
  },
);

```

### ✅ Etapa 3: usar nas rotas

```
@Get('me')
getProfile(@User() user: JwtPayload) {
  return user;
}

@Get('email')
getUserEmail(@User('email') email: string) {
  return { email };
}

```

### ✅ Bônus: validar o JWT com tipagem
* Se você estiver usando o @nestjs/passport com estratégia JWT, pode usar o tipo no validate():

```
// jwt.strategy.ts

validate(payload: JwtPayload): JwtPayload {
  return payload;
}

```

### 🧠 Resumo
* JwtPayload centralizado = menos erro + mais produtividade

* @User() com chave = mais flexibilidade

* Tudo fortemente tipado (TypeScript feliz 🧡)