import { Router } from "express";
import {
  createPlanet,
  deletePlanet,
  getAllPlanets,
  getPlanetById,
  updatePlanet,
} from "../controller/planet-controller";

const planetRouter = Router();

planetRouter.get("/", getAllPlanets);
planetRouter.get("/:id", getPlanetById);
planetRouter.post("/", createPlanet);
planetRouter.put("/:id", updatePlanet);
planetRouter.delete("/:id", deletePlanet);

export { planetRouter };
