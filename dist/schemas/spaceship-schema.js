"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSpaceshipSchema = exports.createSpaceshipSchema = void 0;
const zod_1 = require("zod");
const createSpaceshipSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, {
        message: "Name must have at least 3 characters",
    }),
    model: zod_1.z.string().min(3, {
        message: "Model must have at least 3 characters",
    }),
    passengers: zod_1.z.number().int().min(0, {
        message: "Max speed must be a positive integer",
    }),
    manufacturer: zod_1.z.string().min(3, {
        message: "Manufacturer must have at least 3 characters",
    }),
});
exports.createSpaceshipSchema = createSpaceshipSchema;
const updateSpaceshipSchema = createSpaceshipSchema.partial();
exports.updateSpaceshipSchema = updateSpaceshipSchema;
