import { Request, Response } from "express";
import {
  findUserByEmailAndPassword,
  signInUser,
} from "../repository/user-repository";
import { createNewUser, login } from "../service/user-service";
import { NotFoundError } from "../error/not-found-error";

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userLogged = await login(email, password);

  if (userLogged instanceof NotFoundError) {
    res.status(404).json({ error: userLogged.message });
    return;
  }

  if (userLogged instanceof Error) {
    res.status(400).json({ error: userLogged.message });
    return;
  }

  res.status(200).json(userLogged);
};

const createUser = async (req: Request, res: Response) => {
  const newUser = await createNewUser(req.body);

  if (newUser instanceof Error) {
    res.status(400).json({ error: newUser.message });
    return;
  }

  res.status(201).json(newUser);
};

export { loginUser, createUser };
