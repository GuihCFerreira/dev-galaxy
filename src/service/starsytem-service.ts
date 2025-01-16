import { NotFoundError } from "../error/not-found-error";
import { getById } from "../repository/starsystem-repository";

const findStarsystemByID = async (id: string) => {
  const starsystem = await getById(id);

  if (!starsystem) {
    return new NotFoundError("Starsystem not found");
  }

  return starsystem;
};

export { findStarsystemByID };
