import { NotFoundError } from "../error/not-found-error";
import { getById } from "../repository/character-repository";

const findCharacterByID = async (id: string) => {
  const character = await getById(id);

  if (!character) {
    return new NotFoundError("Character not found");
  }

  return character;
};

export { findCharacterByID };
