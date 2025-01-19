"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterSchema = exports.createCharacterSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("./enums");
const createCharacterSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, {
        message: "Name must have at least 3 characters",
    }),
    race: enums_1.raceEnum,
    affiliation: enums_1.affiliationEnum,
    homePlanetId: zod_1.z.string().uuid({
        message: "Invalid home planet ID",
    }),
});
exports.createCharacterSchema = createCharacterSchema;
const updateCharacterSchema = createCharacterSchema.partial();
exports.updateCharacterSchema = updateCharacterSchema;
