import { z } from "zod";

const createSpaceshipSchema = z.object({
  name: z.string().min(3, {
    message: "Name must have at least 3 characters",
  }),
  model: z.string().min(3, {
    message: "Model must have at least 3 characters",
  }),
  passengers: z.number().int().min(0, {
    message: "Max speed must be a positive integer",
  }),
  manufacturer: z.string().min(3, {
    message: "Manufacturer must have at least 3 characters",
  }),
});

const updateSpaceshipSchema = createSpaceshipSchema.partial();

export { createSpaceshipSchema, updateSpaceshipSchema };
