import { Router } from "express";
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controller/character-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";

const characterRouter = Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", verifyIdParam, getCharacterById);
characterRouter.post("/", createCharacter);
characterRouter.put("/:id", verifyIdParam, updateCharacter);
characterRouter.delete("/:id", verifyIdParam, deleteCharacter);

export { characterRouter };
