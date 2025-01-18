import { z } from "zod";

const loginUserSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(8, {
    message: "Password must have at least 8 characters",
  }),
});

export { loginUserSchema };
