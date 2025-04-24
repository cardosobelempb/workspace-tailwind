import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { ZodSchema, ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

interface ZodValidationPipeOptions {
  schema: ZodSchema;
  customMessage?: string;
  logErrors?: boolean;
}

@Injectable()
export class ZodValidationPipe<T = any> implements PipeTransform {
  constructor(private readonly options: ZodValidationPipeOptions) {}

  transform(value: unknown, metadata: ArgumentMetadata): T {
    const {
      schema,
      customMessage = "Validation failed",
      logErrors = false,
    } = this.options;

    try {
      return schema.parse(value) as T;
    } catch (error) {
      if (error instanceof ZodError) {
        const formatted = fromZodError(error);

        if (logErrors) {
          console.error("[ZodValidationPipe]", formatted);
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
