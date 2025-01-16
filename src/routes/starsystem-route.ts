import { Router } from "express";
import {
  createStarsystem,
  deleteStarsystem,
  getAllStarsystems,
  getStarsystemById,
  updateStarsystem,
} from "../controller/starsystem-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";

const starsystemRouter = Router();

starsystemRouter.get("/", getAllStarsystems);
starsystemRouter.get("/:id", verifyIdParam, getStarsystemById);
starsystemRouter.post("/", createStarsystem);
starsystemRouter.put("/:id", verifyIdParam, updateStarsystem);
starsystemRouter.delete("/:id", verifyIdParam, deleteStarsystem);

export { starsystemRouter };
