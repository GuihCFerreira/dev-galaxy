"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStarSystemSchema = exports.createStarSystemSchema = void 0;
const zod_1 = require("zod");
const createStarSystemSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, {
        message: "Name must have at least 3 characters",
    }),
    description: zod_1.z.string().min(3, {
        message: "Description must have at least 3 characters",
    }),
});
exports.createStarSystemSchema = createStarSystemSchema;
const updateStarSystemSchema = createStarSystemSchema.partial();
exports.updateStarSystemSchema = updateStarSystemSchema;
