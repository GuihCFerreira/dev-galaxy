import { Router } from "express";
import {
  createSpaceship,
  deleteSpaceship,
  getAllSpaceships,
  getSpaceshipById,
  updateSpaceship,
} from "../controller/spaceship-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";

const spaceshipRouter = Router();

spaceshipRouter.get("/", getAllSpaceships);
spaceshipRouter.get("/:id", verifyIdParam, getSpaceshipById);
spaceshipRouter.post("/", verifyIdParam, createSpaceship);
spaceshipRouter.put("/:id", verifyIdParam, updateSpaceship);
spaceshipRouter.delete("/:id", verifyIdParam, deleteSpaceship);

export { spaceshipRouter };
