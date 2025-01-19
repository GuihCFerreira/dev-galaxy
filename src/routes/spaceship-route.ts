import { Router } from "express";
import {
  createSpaceship,
  deleteSpaceship,
  getAllSpaceships,
  getSpaceshipById,
  updateSpaceship,
} from "../controller/spaceship-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";
import { validadeInput } from "../middleware/validate-input";
import {
  createSpaceshipSchema,
  updateSpaceshipSchema,
} from "../schemas/spaceship-schema";

const spaceshipRouter = Router();

spaceshipRouter.get("/", getAllSpaceships);
spaceshipRouter.get("/:id", verifyIdParam, getSpaceshipById);
spaceshipRouter.post(
  "/",
  validadeInput(createSpaceshipSchema),
  createSpaceship
);
spaceshipRouter.put(
  "/:id",
  verifyIdParam,
  validadeInput(updateSpaceshipSchema),
  updateSpaceship
);
spaceshipRouter.delete("/:id", verifyIdParam, deleteSpaceship);

export { spaceshipRouter };
