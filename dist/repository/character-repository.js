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
exports.deleteCharacterById = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const prisma_1 = require("../database/prisma");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.characters.findMany({
        omit: {
            homePlanetId: true,
        },
        include: {
            homePlanet: {
                include: {
                    starSystem: true,
                },
                omit: {
                    starSystemId: true,
                },
            },
        },
    });
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.characters.findUnique({
        where: {
            id,
        },
        omit: {
            homePlanetId: true,
        },
        include: {
            homePlanet: {
                include: {
                    starSystem: true,
                },
                omit: {
                    starSystemId: true,
                },
            },
        },
    });
});
exports.getById = getById;
const create = (character) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.characters.create({
        data: character,
        include: {
            homePlanet: {
                include: {
                    starSystem: true,
                },
                omit: {
                    starSystemId: true,
                },
            },
        },
    });
});
exports.create = create;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.characters.update({
        where: {
            id,
        },
        data,
        include: {
            homePlanet: {
                include: {
                    starSystem: {
                        omit: {
                            id: true,
                        },
                    },
                },
                omit: {
                    starSystemId: true,
                    id: true,
                },
            },
        },
    });
});
exports.update = update;
const deleteCharacterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.characters.delete({
        where: {
            id,
        },
    });
});
exports.deleteCharacterById = deleteCharacterById;
