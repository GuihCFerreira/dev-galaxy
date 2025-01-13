import { Characters } from "@prisma/client";
import { db } from "../database/prisma";

const getAll = async () => {
  return db.characters.findMany();
};

const getById = async (id: string) => {
  return db.characters.findUnique({
    where: {
      id,
    },
  });
};

const create = async (character: Characters) => {
  return db.characters.create({
    data: character,
  });
};

const update = async (id: string, data: Characters) => {
  return db.characters.update({
    where: {
      id,
    },
    data,
  });
};

const deleteCharacterById = async (id: string) => {
  return db.characters.delete({
    where: {
      id,
    },
  });
};

export { getAll, getById, create, update, deleteCharacterById };
