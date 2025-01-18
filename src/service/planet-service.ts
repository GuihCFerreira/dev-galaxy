import { Planets } from "@prisma/client";
import { NotFoundError } from "../error/not-found-error";
import {
  deletePlanetById,
  getById,
  update,
} from "../repository/planet-respository";

const findPlanetByID = async (id: string) => {
  const planet = await getById(id);

  if (!planet) {
    return new NotFoundError("Planet not found");
  }

  return planet;
};

const updatePlanetById = async (id: string, data: Planets) => {
  const planet = await getById(id);

  if (!planet) {
    return new NotFoundError("Planet not found");
  }

  const updatePlanet = await update(id, data);

  return updatePlanet;
};

const deletePlanetId = async (id: string) => {
  const planet = await getById(id);

  if (!planet) {
    return new NotFoundError("Planet not found");
  }

  return await deletePlanetById(id);
};

export { findPlanetByID, updatePlanetById, deletePlanetId };
