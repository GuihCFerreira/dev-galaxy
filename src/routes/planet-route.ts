import { Router } from "express";
import {
  createPlanet,
  deletePlanet,
  getAllPlanets,
  getPlanetById,
  updatePlanet,
} from "../controller/planet-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";

const planetRouter = Router();

planetRouter.get("/", getAllPlanets);
planetRouter.get("/:id", verifyIdParam, getPlanetById);
planetRouter.post("/", createPlanet);
planetRouter.put("/:id", verifyIdParam, updatePlanet);
planetRouter.delete("/:id", verifyIdParam, deletePlanet);

export { planetRouter };
