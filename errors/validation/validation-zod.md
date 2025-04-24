🚀 Melhorias que podemos aplicar:
✅ 1. Tipagem generificada
Permite que o pipe preserve o tipo original do DTO validado (CreateUserDto, por exemplo).

✅ 2. Suporte para optional fallback (útil pra PATCH)
Se um campo for opcional e não vier no body, o pipe pode lidar com isso graciosamente.

✅ 3. Mensagem de erro customizável (UX melhor)
Permite personalizar a mensagem raiz da exceção.

✅ 4. Logs opcionais (debug-friendly)
✅ Versão melhorada do ZodValidationPipe

```
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

interface ZodValidationPipeOptions {
  schema: ZodSchema;
  customMessage?: string;
  logErrors?: boolean;
}

@Injectable()
export class ZodValidationPipe<T = any> implements PipeTransform {
  constructor(private readonly options: ZodValidationPipeOptions) {}

  transform(value: unknown, metadata: ArgumentMetadata): T {
    const { schema, customMessage = 'Validation failed', logErrors = false } = this.options;

    try {
      return schema.parse(value) as T;
    } catch (error) {
      if (error instanceof ZodError) {
        const formatted = fromZodError(error);

        if (logErrors) {
          console.error('[ZodValidationPipe]', formatted);
        }

        throw new BadRequestException({
          message: customMessage,
          statusCode: 400,
          errors: formatted.details || formatted.message,
        });
      }

      throw new BadRequestException(customMessage);
    }
  }
}

```

🧪 Como usar no controller

```
@Post()
create(
  @Body(new ZodValidationPipe({ schema: CreateUserSchema })) body: CreateUserDto,
) {
  return this.usersService.create(body);
}

```

💡 Benefícios dessa versão

Melhorias	Resultado
T = any + as T	Tipagem automática pós-validação
customMessage	UX mais amigável / suporte multi idioma
logErrors	Ajuda no debug em dev sem poluir produção
metadata	Pronto pra futuras melhorias (ex: tipo de dado: query/body/param)