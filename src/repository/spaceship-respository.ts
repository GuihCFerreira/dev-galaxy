import { Spaceships } from "@prisma/client";
import { db } from "../database/prisma";

const getAll = async () => {
  return db.spaceships.findMany();
};

const getById = async (id: string) => {
  return db.spaceships.findUnique({
    where: {
      id,
    },
  });
};

const create = async (spaceship: Spaceships) => {
  return db.spaceships.create({
    data: spaceship,
  });
};

const update = async (id: string, data: Spaceships) => {
  return db.spaceships.update({
    where: {
      id,
    },
    data,
  });
};

const deleteSpaceshipById = async (id: string) => {
  return db.spaceships.delete({
    where: {
      id,
    },
  });
};

export { getAll, getById, create, update, deleteSpaceshipById };
