import { Request, Response } from "express";

const getAllPlanets = async (req: Request, res: Response) => {
  res.status(200).send("GET /planets");
};

const getPlanetById = async (req: Request, res: Response) => {
  res.status(200).send("GET /planets");
};

const createPlanet = async (req: Request, res: Response) => {
  res.status(201).send("GET /planets");
};

const updatePlanet = async (req: Request, res: Response) => {
  res.status(200).send("GET /planets");
};

const deletePlanet = async (req: Request, res: Response) => {
  res.status(200).send("GET /planets");
};

export {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
