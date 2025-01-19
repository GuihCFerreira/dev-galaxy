import { Router } from "express";
import {
  createStarsystem,
  deleteStarsystem,
  getAllStarsystems,
  getStarsystemById,
  updateStarsystem,
} from "../controller/starsystem-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";
import { validadeInput } from "../middleware/validate-input";
import {
  createStarSystemSchema,
  updateStarSystemSchema,
} from "../schemas/starsystem-schema";

const starsystemRouter = Router();

starsystemRouter.get("/", getAllStarsystems);
starsystemRouter.get("/:id", verifyIdParam, getStarsystemById);
starsystemRouter.post(
  "/",
  validadeInput(createStarSystemSchema),
  createStarsystem
);
starsystemRouter.put(
  "/:id",
  verifyIdParam,
  validadeInput(updateStarSystemSchema),
  updateStarsystem
);
starsystemRouter.delete("/:id", verifyIdParam, deleteStarsystem);

export { starsystemRouter };
