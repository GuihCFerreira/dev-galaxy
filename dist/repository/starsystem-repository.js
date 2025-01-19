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
exports.deleteStarsystemById = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const prisma_1 = require("../database/prisma");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.starSystems.findMany({
        include: {
            planets: {
                omit: {
                    starSystemId: true,
                },
            },
        },
    });
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.starSystems.findUnique({
        where: {
            id,
        },
        include: {
            planets: {
                omit: {
                    starSystemId: true,
                },
            },
        },
    });
});
exports.getById = getById;
const create = (starsystem) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.starSystems.create({
        data: starsystem,
    });
});
exports.create = create;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.starSystems.update({
        where: {
            id,
        },
        data,
    });
});
exports.update = update;
const deleteStarsystemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.starSystems.delete({
        where: {
            id,
        },
    });
});
exports.deleteStarsystemById = deleteStarsystemById;
