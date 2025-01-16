import { Router } from "express";
import { createUser, loginUser } from "../controller/user-controller";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser);

export { userRouter };
