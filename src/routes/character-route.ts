import { Router } from "express";
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controller/character-controller";

const characterRouter = Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterById);
characterRouter.post("/", createCharacter);
characterRouter.put("/:id", updateCharacter);
characterRouter.delete("/:id", deleteCharacter);

export { characterRouter };
