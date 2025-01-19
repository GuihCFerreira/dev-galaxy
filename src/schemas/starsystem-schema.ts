import { z } from "zod";

const createStarSystemSchema = z.object({
  name: z.string().min(3, {
    message: "Name must have at least 3 characters",
  }),
  description: z.string().min(3, {
    message: "Description must have at least 3 characters",
  }),
});

const updateStarSystemSchema = createStarSystemSchema.partial();

export { createStarSystemSchema, updateStarSystemSchema };
