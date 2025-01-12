import { Request, Response, Router } from "express";

const planetRouter = Router();

const getAllPlanets = async (req: Request, res: Response) => {
  res.status(200).send("GET /planets");
};

planetRouter.get("/", getAllPlanets);

export { planetRouter };
