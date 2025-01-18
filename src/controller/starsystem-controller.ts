import { Request, Response } from "express";
import { create, getAll } from "../repository/starsystem-repository";
import {
  deleteStarsystemId,
  findStarsystemByID,
  updateStarsystemById,
} from "../service/starsytem-service";
import { NotFoundError } from "../error/not-found-error";

const getAllStarsystems = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getAll());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const getStarsystemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const starsystem = await findStarsystemByID(id);

    if (starsystem instanceof NotFoundError) {
      res.status(404).json({ error: starsystem.message });
      return;
    }

    res.status(200).json(starsystem);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const createStarsystem = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await create(req.body));
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const updateStarsystem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const udpatedStarsystem = await updateStarsystemById(id, body);

    if (udpatedStarsystem instanceof NotFoundError) {
      res.status(404).json({ error: udpatedStarsystem.message });
      return;
    }

    res.status(200).json(udpatedStarsystem);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const deleteStarsystem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedStarsystem = await deleteStarsystemId(id);

    if (deletedStarsystem instanceof NotFoundError) {
      res.status(404).json({ error: deletedStarsystem.message });
      return;
    }

    res.status(204).json(deletedStarsystem);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

export {
  getAllStarsystems,
  getStarsystemById,
  createStarsystem,
  updateStarsystem,
  deleteStarsystem,
};
