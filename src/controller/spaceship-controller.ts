import { Request, Response } from "express";
import {
  create,
  deleteSpaceshipById,
  getAll,
  getById,
  update,
} from "../repository/spaceship-respository";

const getAllSpaceships = async (req: Request, res: Response) => {
  res.status(200).json(await getAll());
};

const getSpaceshipById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await getById(id));
};

const createSpaceship = async (req: Request, res: Response) => {
  res.status(201).json(await create(req.body));
};

const updateSpaceship = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await update(id, req.body));
};

const deleteSpaceship = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await deleteSpaceshipById(id));
};

export {
  getAllSpaceships,
  getSpaceshipById,
  createSpaceship,
  updateSpaceship,
  deleteSpaceship,
};
