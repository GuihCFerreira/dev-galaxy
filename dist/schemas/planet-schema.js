"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlanetSchema = exports.createPlanetSchema = void 0;
const zod_1 = require("zod");
const createPlanetSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, {
        message: "Name must have at least 3 characters",
    }),
    climate: zod_1.z.string().min(3, {
        message: "Climate must have at least 3 characters",
    }),
    terrain: zod_1.z.string().min(3, {
        message: "Terrain must have at least 3 characters",
    }),
    starSystemId: zod_1.z.string().uuid({
        message: "Invalid star system ID",
    }),
});
exports.createPlanetSchema = createPlanetSchema;
const updatePlanetSchema = createPlanetSchema.partial();
exports.updatePlanetSchema = updatePlanetSchema;
