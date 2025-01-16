import { Users } from "@prisma/client";
import { db } from "../database/prisma";

const findUserByEmailAndPassword = async (email: string, password: string) => {
  return db.users.findFirst({
    where: {
      email,
      password,
    },
  });
};

const findUserByEmail = async (email: string) => {
  return db.users.findFirst({
    where: {
      email,
    },
  });
};

const signInUser = async (user: Users) => {
  return db.users.create({
    data: user,
    omit: {
      password: true,
    },
  });
};

export { findUserByEmailAndPassword, signInUser, findUserByEmail };
