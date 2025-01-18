import { Request, Response } from "express";
import { create, getAll } from "../repository/character-repository";
import { NotFoundError } from "../error/not-found-error";
import {
  deleteCharacterId,
  findCharacterByID,
  updateCharacterById,
} from "../service/character-service";

const getAllCharacters = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getAll());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const getCharacterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const character = await findCharacterByID(id);

    if (character instanceof NotFoundError) {
      res.status(404).json({ error: character.message });
      return;
    }

    res.status(200).json(character);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const createCharacter = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await create(req.body));
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const updateCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedCharacter = await updateCharacterById(id, body);

    if (updatedCharacter instanceof NotFoundError) {
      res.status(404).json({ error: updatedCharacter.message });
      return;
    }

    res.status(200).json(updatedCharacter);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const deleteCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedCharacter = await deleteCharacterId(id);

    if (deletedCharacter instanceof NotFoundError) {
      res.status(404).json({ error: deletedCharacter.message });
      return;
    }

    res.status(204).json(deletedCharacter);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

export {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
