import { StarSystems } from "@prisma/client";
import { db } from "../database/prisma";

const getAll = async () => {
  return db.starSystems.findMany({
    include: {
      planets: true,
    },
  });
};

const getById = async (id: string) => {
  return db.starSystems.findUnique({
    where: {
      id,
    },
    include: {
      planets: true,
    },
  });
};

const create = async (starsystem: StarSystems) => {
  return db.starSystems.create({
    data: starsystem,
  });
};

const update = async (id: string, data: StarSystems) => {
  return db.starSystems.update({
    where: {
      id,
    },
    data,
  });
};

const deleteStarsystemById = async (id: string) => {
  return db.starSystems.delete({
    where: {
      id,
    },
  });
};

export { getAll, getById, create, update, deleteStarsystemById };
