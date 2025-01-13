import { Planets } from "@prisma/client";
import { db } from "../database/prisma";

const getAll = async () => {
  return db.planets.findMany();
};

const getById = async (id: string) => {
  return db.planets.findUnique({
    where: {
      id,
    },
  });
};

const create = async (planet: Planets) => {
  return db.planets.create({
    data: planet,
  });
};

const update = async (id: string, data: Planets) => {
  return db.planets.update({
    where: {
      id,
    },
    data,
  });
};

const deletePlanetById = async (id: string) => {
  return db.planets.delete({
    where: {
      id,
    },
  });
};

export { getAll, getById, create, update, deletePlanetById };
