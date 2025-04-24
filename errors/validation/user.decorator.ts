import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

export const User = createParamDecorator(
  (data: keyof JwtPayloadInfer | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayloadInfer | undefined;

    if (!user) {
      throw new UnauthorizedException("User not authenticated");
    }

    return data ? user[data] : user;
  }
);
