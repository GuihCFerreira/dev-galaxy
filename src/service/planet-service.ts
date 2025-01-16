import { NotFoundError } from "../error/not-found-error";
import { getById } from "../repository/planet-respository";

const findPlanetByID = async (id: string) => {
  const planet = await getById(id);

  if (!planet) {
    return new NotFoundError("Planet not found");
  }

  return planet;
};

export { findPlanetByID };
