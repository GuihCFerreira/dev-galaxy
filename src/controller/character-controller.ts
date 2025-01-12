import { Request, Response } from "express";

const getAllCharacters = async (req: Request, res: Response) => {
  res.status(200).send("GET /Characters");
};

const getCharacterById = async (req: Request, res: Response) => {
  res.status(200).send("GET /Characters");
};

const createCharacter = async (req: Request, res: Response) => {
  res.status(201).send("GET /Characters");
};

const updateCharacter = async (req: Request, res: Response) => {
  res.status(200).send("GET /Characters");
};

const deleteCharacter = async (req: Request, res: Response) => {
  res.status(200).send("GET /Characters");
};

export {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
