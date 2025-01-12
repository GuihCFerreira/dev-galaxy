import { Router } from "express";
import {
  createStarsystem,
  deleteStarsystem,
  getAllStarsystems,
  getStarsystemById,
  updateStarsystem,
} from "../controller/starsystem-controller";

const starsystemRouter = Router();

starsystemRouter.get("/", getAllStarsystems);
starsystemRouter.get("/:id", getStarsystemById);
starsystemRouter.post("/", createStarsystem);
starsystemRouter.put("/:id", updateStarsystem);
starsystemRouter.delete("/:id", deleteStarsystem);

export { starsystemRouter };
