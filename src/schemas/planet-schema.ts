import { z } from "zod";

const createPlanetSchema = z.object({
  name: z.string().min(3, {
    message: "Name must have at least 3 characters",
  }),
  climate: z.string().min(3, {
    message: "Climate must have at least 3 characters",
  }),
  terrain: z.string().min(3, {
    message: "Terrain must have at least 3 characters",
  }),
  starSystemId: z.string().uuid({
    message: "Invalid star system ID",
  }),
});

const updatePlanetSchema = createPlanetSchema.partial();

export { createPlanetSchema, updatePlanetSchema };
