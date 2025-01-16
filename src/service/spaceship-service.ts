import { NotFoundError } from "../error/not-found-error";
import { getById } from "../repository/spaceship-respository";

const findSpaceshipByID = async (id: string) => {
  const spaceship = await getById(id);

  if (!spaceship) {
    return new NotFoundError("Spaceship not found");
  }

  return spaceship;
};

export { findSpaceshipByID };
