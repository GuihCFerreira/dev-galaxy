import { z } from "zod";
import { affiliationEnum, raceEnum } from "./enums";

const createCharacterSchema = z.object({
  name: z.string().min(3, {
    message: "Name must have at least 3 characters",
  }),
  race: raceEnum,
  affiliation: affiliationEnum,
  homePlanetId: z.string().uuid({
    message: "Invalid home planet ID",
  }),
});

const updateCharacterSchema = createCharacterSchema.partial();

export { createCharacterSchema, updateCharacterSchema };
