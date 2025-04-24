import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(18, "You must be 18 or older"),
});

// Tipagem automática (Zod <3)
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
