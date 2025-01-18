import { z } from "zod";
import { affiliationEnum } from "./enums";

const loginUserSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(8, {
    message: "Password must have at least 8 characters",
  }),
});

const createUserSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(8, {
    message: "Password must have at least 8 characters",
  }),
  affiliation: affiliationEnum,
});

export { loginUserSchema, createUserSchema };
