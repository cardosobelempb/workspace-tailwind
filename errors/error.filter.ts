@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let error: StandardError | ValidationError = {
      timestamp: new Date().toISOString(),
      status,
      error: "Internal server error",
      message: exception.message || "Unexpected error",
      path: request.url,
    };

    switch (exception.name) {
      case "ResourceNotFoundError":
        status = HttpStatus.NOT_FOUND;
        error = {
          ...error,
          status,
          error: ExceptionConstants.NOT_FOUND,
        };
        break;

      case "EntityNotFoundError":
        status = HttpStatus.NOT_FOUND;
        error = {
          ...error,
          status,
          error: ExceptionConstants.ENTITY_NOT_FOUND,
        };
        break;

      case "DataIntegrityViolationError":
        status = HttpStatus.BAD_REQUEST;
        error = {
          ...error,
          status,
          error: ExceptionConstants.DATA_INTEGRITY_VIOLATION,
        };
        break;

      case "BadRequestError":
        if (exception.message === "Validation failed") {
          status = HttpStatus.UNPROCESSABLE_ENTITY;
          const validationError: ValidationError = {
            ...error,
            status,
            error: ExceptionConstants.VIOLATION_EXCEPTION,
            errors: [],
          };

          if (Array.isArray(exception.response?.message)) {
            validationError.errors = exception.response.message.map(
              (msg: string) => {
                const [field, ...rest] = msg.split(":");
                return {
                  field: field.trim(),
                  message: rest.join(":").trim(),
                };
              }
            );
          }

          error = validationError;
        }
        break;

      default:
        // Aqui você pode logar a exceção ou manter como erro genérico
        break;
    }

    response.status(status).json(error);
  }
}
