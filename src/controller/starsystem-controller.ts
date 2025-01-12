import { Request, Response } from "express";

const getAllStarsystems = async (req: Request, res: Response) => {
  res.status(200).send("GET /Starsystems");
};

const getStarsystemById = async (req: Request, res: Response) => {
  res.status(200).send("GET /Starsystems");
};

const createStarsystem = async (req: Request, res: Response) => {
  res.status(201).send("GET /Starsystems");
};

const updateStarsystem = async (req: Request, res: Response) => {
  res.status(200).send("GET /Starsystems");
};

const deleteStarsystem = async (req: Request, res: Response) => {
  res.status(200).send("GET /Starsystems");
};

export {
  getAllStarsystems,
  getStarsystemById,
  createStarsystem,
  updateStarsystem,
  deleteStarsystem,
};
