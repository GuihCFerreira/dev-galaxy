import { Request, Response } from "express";
import {
  create,
  deletePlanetById,
  getAll,
  getById,
  update,
} from "../repository/planet-respository";

const getAllPlanets = async (req: Request, res: Response) => {
  res.status(200).json(await getAll());
};

const getPlanetById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await getById(id));
};

const createPlanet = async (req: Request, res: Response) => {
  res.status(201).json(await create(req.body));
};

const updatePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await update(id, req.body));
};

const deletePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).send(await deletePlanetById(id));
};

export {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
