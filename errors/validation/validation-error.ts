import { BadRequestException } from "@nestjs/common";

export class ValidationException extends BadRequestException {
  constructor(errors: { field: string; message: string }[]) {
    super({
      message: "Validation failed",
      errors,
    });
  }
}
