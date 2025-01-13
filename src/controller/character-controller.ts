import { Request, Response } from "express";
import {
  create,
  deleteCharacterById,
  getAll,
  getById,
  update,
} from "../repository/character-repository";

const getAllCharacters = async (req: Request, res: Response) => {
  res.status(200).json(await getAll());
};

const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await getById(id));
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
