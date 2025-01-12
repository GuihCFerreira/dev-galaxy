import { Request, Response } from "express";

const getAllSpaceships = async (req: Request, res: Response) => {
  res.status(200).send("GET /Spaceships");
};

const getSpaceshipById = async (req: Request, res: Response) => {
  res.status(200).send("GET /Spaceships");
};

const createSpaceship = async (req: Request, res: Response) => {
  res.status(201).send("GET /Spaceships");
};

const updateSpaceship = async (req: Request, res: Response) => {
  res.status(200).send("GET /Spaceships");
};

const deleteSpaceship = async (req: Request, res: Response) => {
  res.status(200).send("GET /Spaceships");
};

export {
  getAllSpaceships,
  getSpaceshipById,
  createSpaceship,
  updateSpaceship,
  deleteSpaceship,
};
