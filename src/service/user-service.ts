import { Users } from "@prisma/client";
import { findUserByEmail, signInUser } from "../repository/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NotFoundError } from "../error/not-found-error";

const createNewUser = async (user: Users) => {
  const userExists = await findUserByEmail(user.email);

  if (userExists) {
    return Error("User already exists");
  }

  const hashPassword = await bcrypt.hash(
    user.password,
    Number(process.env.SALT_BCRYPT)
  );

  user.password = hashPassword;

  const newUser = await signInUser(user);
  const token = await generateToken(newUser.id);

  return { ...newUser, token };
};

const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    return new NotFoundError("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return Error("Password does not match");
  }

  const { password: _, ...userWithoutPassword } = user;

  const token = await generateToken(user.id);

  return { ...userWithoutPassword, token };
};

const generateToken = async (userId: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env file");
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export { createNewUser, login };
