import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.schema";

@Injectable()
export class UsersService {
  create(user: CreateUserDto) {
    // Aqui o user já está validado e tipado
    return {
      message: "User created",
      data: user,
    };
  }
}
