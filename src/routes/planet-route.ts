import { Router } from "express";
import {
  createPlanet,
  deletePlanet,
  getAllPlanets,
  getPlanetById,
  updatePlanet,
} from "../controller/planet-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";
import { validadeInput } from "../middleware/validate-input";
import {
  createPlanetSchema,
  updatePlanetSchema,
} from "../schemas/planet-schema";

const planetRouter = Router();

planetRouter.get("/", getAllPlanets);
planetRouter.get("/:id", verifyIdParam, getPlanetById);
planetRouter.post("/", validadeInput(createPlanetSchema), createPlanet);
planetRouter.put(
  "/:id",
  verifyIdParam,
  validadeInput(updatePlanetSchema),
  updatePlanet
);
planetRouter.delete("/:id", verifyIdParam, deletePlanet);

export { planetRouter };
