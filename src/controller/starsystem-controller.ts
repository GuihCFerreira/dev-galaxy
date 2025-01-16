import { Request, Response } from "express";
import {
  create,
  deleteStarsystemById,
  getAll,
  getById,
  update,
} from "../repository/starsystem-repository";
import { findStarsystemByID } from "../service/starsytem-service";
import { NotFoundError } from "../error/not-found-error";

const getAllStarsystems = async (req: Request, res: Response) => {
  res.status(200).json(await getAll());
};

const getStarsystemById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const starsystem = await findStarsystemByID(id);

  if (starsystem instanceof NotFoundError) {
    res.status(404).json({ error: starsystem.message });
    return;
  }

  res.status(200).json(await getById(id));
};

const createStarsystem = async (req: Request, res: Response) => {
  res.status(201).json(await create(req.body));
};

const updateStarsystem = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await update(id, req.body));
};

const deleteStarsystem = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).json(await deleteStarsystemById(id));
};

export {
  getAllStarsystems,
  getStarsystemById,
  createStarsystem,
  updateStarsystem,
  deleteStarsystem,
};
