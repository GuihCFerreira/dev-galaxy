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
exports.deleteStarsystem = exports.updateStarsystem = exports.createStarsystem = exports.getStarsystemById = exports.getAllStarsystems = void 0;
const starsystem_repository_1 = require("../repository/starsystem-repository");
const starsytem_service_1 = require("../service/starsytem-service");
const not_found_error_1 = require("../error/not-found-error");
const getAllStarsystems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield (0, starsystem_repository_1.getAll)());
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getAllStarsystems = getAllStarsystems;
const getStarsystemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const starsystem = yield (0, starsytem_service_1.findStarsystemByID)(id);
        if (starsystem instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: starsystem.message });
            return;
        }
        res.status(200).json(starsystem);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getStarsystemById = getStarsystemById;
const createStarsystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).json(yield (0, starsystem_repository_1.create)(req.body));
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.createStarsystem = createStarsystem;
const updateStarsystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const udpatedStarsystem = yield (0, starsytem_service_1.updateStarsystemById)(id, body);
        if (udpatedStarsystem instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: udpatedStarsystem.message });
            return;
        }
        res.status(200).json(udpatedStarsystem);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.updateStarsystem = updateStarsystem;
const deleteStarsystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedStarsystem = yield (0, starsytem_service_1.deleteStarsystemId)(id);
        if (deletedStarsystem instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: deletedStarsystem.message });
            return;
        }
        res.status(204).json(deletedStarsystem);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.deleteStarsystem = deleteStarsystem;
