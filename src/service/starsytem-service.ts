import { StarSystems } from "@prisma/client";
import { NotFoundError } from "../error/not-found-error";
import {
  deleteStarsystemById,
  getById,
  update,
} from "../repository/starsystem-repository";

const findStarsystemByID = async (id: string) => {
  const starsystem = await getById(id);

  if (!starsystem) {
    return new NotFoundError("Starsystem not found");
  }

  return starsystem;
};

const updateStarsystemById = async (id: string, body: StarSystems) => {
  const starsystem = await getById(id);

  if (!starsystem) {
    return new NotFoundError("Starsystem not found");
  }

  const updatedStarsystem = await update(id, body);

  return updatedStarsystem;
};

const deleteStarsystemId = async (id: string) => {
  const starsystem = await getById(id);

  if (!starsystem) {
    return new NotFoundError("Starsystem not found");
  }

  const deletedStarsystem = await deleteStarsystemById(id);

  return deletedStarsystem;
};

export { findStarsystemByID, updateStarsystemById, deleteStarsystemId };
