### ✅ Versão melhorada: @User() decorator

```
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const User = createParamDecorator(
  (data: keyof JwtPayloadInfer | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayloadInfer | undefined;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    return data ? user[data] : user;
  },
);

```

### 🔥 Como usar:

```
@Get('profile')
getProfile(@User() user: JwtPayloadInfer) {
  return user;
}

@Get('id')
getUserId(@User('id') id: string) {
  return { userId: id };
}

```

### 🧠 O que essa versão faz melhor?

Melhorias | Por quê importa?
* Nome claro: @User() | Fica idiomático e fácil de entender
* Tipagem com keyof | Permite @User('id') com autocomplete
* Verificação de request.user | Mais seguro — evita undefined em runtime
* Reutilizável e flexível | Você pode customizar fácil para novos tipos

### Extra (opcional)
* Se quiser que funcione com diferentes estratégias de autenticação ou subclasses do payload JWT, dá pra generalizar ainda mais com um tipo genérico opcional:

```
export const User = createParamDecorator<
  keyof T | undefined,
  ExecutionContext,
  T
>((data, context) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user as T;

  if (!user) {
    throw new UnauthorizedException('User not authenticated');
  }

  return data ? user[data] : user;
});

```
