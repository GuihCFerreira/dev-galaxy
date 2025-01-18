import { Request, Response } from "express";
import { create, getAll } from "../repository/spaceship-respository";
import {
  deleteSpaceshipId,
  findSpaceshipByID,
  updateSpaceshipById,
} from "../service/spaceship-service";
import { NotFoundError } from "../error/not-found-error";

const getAllSpaceships = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getAll());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const getSpaceshipById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const spaceship = await findSpaceshipByID(id);

    if (spaceship instanceof NotFoundError) {
      res.status(404).json({ error: spaceship.message });
      return;
    }

    res.status(200).json(spaceship);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const createSpaceship = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await create(req.body));
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const updateSpaceship = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const updatedSpaceship = await updateSpaceshipById(id, body);

  if (updatedSpaceship instanceof NotFoundError) {
    res.status(404).json({ error: updatedSpaceship.message });
    return;
  }

  res.status(200).json(updatedSpaceship);

  try {
    res.status(200).json(await getAll());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const deleteSpaceship = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedSpaceship = await deleteSpaceshipId(id);

    if (deletedSpaceship instanceof NotFoundError) {
      res.status(404).json({ error: deletedSpaceship.message });
      return;
    }

    res.status(200).json(deletedSpaceship);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

export {
  getAllSpaceships,
  getSpaceshipById,
  createSpaceship,
  updateSpaceship,
  deleteSpaceship,
};
