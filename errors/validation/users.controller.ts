import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserSchema, CreateUserDto } from "./dto/create-user.schema";
import { ValidationException } from "src/common/exceptions/validation-exception";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: any) {
    const result = CreateUserSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      throw new ValidationException(errors);
    }

    // Tipo 100% seguro aqui
    const user: CreateUserDto = result.data;

    return this.usersService.create(user);
  }
}
