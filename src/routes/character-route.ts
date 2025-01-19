import { Router } from "express";
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controller/character-controller";
import { verifyIdParam } from "../middleware/verifiy-id-param";
import { validadeInput } from "../middleware/validate-input";
import {
  createCharacterSchema,
  updateCharacterSchema,
} from "../schemas/character-schema";

const characterRouter = Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", verifyIdParam, getCharacterById);
characterRouter.post(
  "/",
  validadeInput(createCharacterSchema),
  createCharacter
);
characterRouter.put(
  "/:id",
  verifyIdParam,
  validadeInput(updateCharacterSchema),
  updateCharacter
);
characterRouter.delete("/:id", verifyIdParam, deleteCharacter);

export { characterRouter };
