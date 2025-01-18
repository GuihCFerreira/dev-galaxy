import { Router } from "express";
import { createUser, loginUser } from "../controller/user-controller";
import { validadeInput } from "../middleware/validate-input";
import { createUserSchema, loginUserSchema } from "../schemas/user-schema";

const userRouter = Router();

userRouter.post("/", validadeInput(createUserSchema), createUser);
userRouter.post("/login", validadeInput(loginUserSchema), loginUser);

export { userRouter };
