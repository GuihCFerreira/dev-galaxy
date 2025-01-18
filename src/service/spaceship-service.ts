import { Spaceships } from "@prisma/client";
import { NotFoundError } from "../error/not-found-error";
import {
  deleteSpaceshipById,
  getById,
  update,
} from "../repository/spaceship-respository";

const findSpaceshipByID = async (id: string) => {
  const spaceship = await getById(id);

  if (!spaceship) {
    return new NotFoundError("Spaceship not found");
  }

  return spaceship;
};

const updateSpaceshipById = async (id: string, body: Spaceships) => {
  const spaceship = await getById(id);

  if (!spaceship) {
    return new NotFoundError("Spaceship not found");
  }

  const updatedSpaceship = await update(id, body);

  return updatedSpaceship;
};

const deleteSpaceshipId = async (id: string) => {
  const spaceship = await getById(id);

  if (!spaceship) {
    return new NotFoundError("Spaceship not found");
  }

  const deletedSpaceship = await deleteSpaceshipById(id);

  return deletedSpaceship;
};

export { findSpaceshipByID, updateSpaceshipById, deleteSpaceshipId };
