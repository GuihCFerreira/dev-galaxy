import { Characters } from "@prisma/client";
import { NotFoundError } from "../error/not-found-error";
import {
  deleteCharacterById,
  getById,
  update,
} from "../repository/character-repository";

const findCharacterByID = async (id: string) => {
  const character = await getById(id);

  if (!character) {
    return new NotFoundError("Character not found");
  }

  return character;
};

const updateCharacterById = async (id: string, body: Characters) => {
  const character = await getById(id);

  if (!character) {
    return new NotFoundError("Character not found");
  }

  const updatedCharacter = await update(id, body);

  return updatedCharacter;
};

const deleteCharacterId = async (id: string) => {
  const character = await getById(id);

  if (!character) {
    return new NotFoundError("Character not found");
  }

  const deletedCharacter = await deleteCharacterById(id);

  return deletedCharacter;
};

export { findCharacterByID, updateCharacterById, deleteCharacterId };
