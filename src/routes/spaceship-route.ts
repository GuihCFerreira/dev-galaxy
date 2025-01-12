import { Router } from "express";
import {
  createSpaceship,
  deleteSpaceship,
  getAllSpaceships,
  getSpaceshipById,
  updateSpaceship,
} from "../controller/spaceship-controller";

const spaceshipRouter = Router();

spaceshipRouter.get("/", getAllSpaceships);
spaceshipRouter.get("/:id", getSpaceshipById);
spaceshipRouter.post("/", createSpaceship);
spaceshipRouter.put("/:id", updateSpaceship);
spaceshipRouter.delete("/:id", deleteSpaceship);

export { spaceshipRouter };
