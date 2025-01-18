import { Request, Response } from "express";
import { create, getAll } from "../repository/planet-respository";
import {
  deletePlanetId,
  findPlanetByID,
  updatePlanetById,
} from "../service/planet-service";
import { NotFoundError } from "../error/not-found-error";

const getAllPlanets = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getAll());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const getPlanetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const planet = await findPlanetByID(id);

    if (planet instanceof NotFoundError) {
      res.status(404).json({ error: planet.message });
      return;
    }

    res.status(200).json(planet);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const createPlanet = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await create(req.body));
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const updatePlanet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedPlanet = await updatePlanetById(id, body);

    if (updatedPlanet instanceof NotFoundError) {
      res.status(404).json({ error: updatedPlanet.message });
      return;
    }

    res.status(200).json(updatedPlanet);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

const deletePlanet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedPlanet = await deletePlanetId(id);

    if (deletedPlanet instanceof NotFoundError) {
      res.status(404).json({ error: deletedPlanet.message });
      return;
    }

    res.status(204).send(deletedPlanet);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
};

export {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
