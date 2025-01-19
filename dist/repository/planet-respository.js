"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlanetById = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const prisma_1 = require("../database/prisma");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.planets.findMany({
        omit: {
            starSystemId: true,
        },
        include: {
            starSystem: true,
            characters: {
                omit: {
                    homePlanetId: true,
                },
            },
        },
    });
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.planets.findUnique({
        where: {
            id,
        },
        omit: {
            starSystemId: true,
        },
        include: {
            starSystem: true,
            characters: {
                omit: {
                    homePlanetId: true,
                },
            },
        },
    });
});
exports.getById = getById;
const create = (planet) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.planets.create({
        data: planet,
    });
});
exports.create = create;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.planets.update({
        where: {
            id,
        },
        data,
    });
});
exports.update = update;
const deletePlanetById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.planets.delete({
        where: {
            id,
        },
    });
});
exports.deletePlanetById = deletePlanetById;
