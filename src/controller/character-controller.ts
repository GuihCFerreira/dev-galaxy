import { Request, Response } from "express";
import {
  create,
  deleteCharacterById,
  getAll,
  getById,
  update,
} from "../repository/character-repository";
import { NotFoundError } from "../error/not-found-error";
import { findCharacterByID } from "../service/character-service";

const getAllCharacters = async (req: Request, res: Response) => {
  res.status(200).json(await getAll());
};

const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const character = await findCharacterByID(id);

  if (character instanceof NotFoundError) {
    res.status(404).json({ error: character.message });
    return;
  }

  res.status(200).json(character);
};

const createCharacter = async (req: Request, res: Response) => {
  res.status(201).json(await create(req.body));
};

const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await update(id, req.body));
};

const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).json(await deleteCharacterById(id));
};

export {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
