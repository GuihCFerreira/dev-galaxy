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
exports.deleteSpaceship = exports.updateSpaceship = exports.createSpaceship = exports.getSpaceshipById = exports.getAllSpaceships = void 0;
const spaceship_respository_1 = require("../repository/spaceship-respository");
const spaceship_service_1 = require("../service/spaceship-service");
const not_found_error_1 = require("../error/not-found-error");
const getAllSpaceships = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield (0, spaceship_respository_1.getAll)());
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getAllSpaceships = getAllSpaceships;
const getSpaceshipById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const spaceship = yield (0, spaceship_service_1.findSpaceshipByID)(id);
        if (spaceship instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: spaceship.message });
            return;
        }
        res.status(200).json(spaceship);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getSpaceshipById = getSpaceshipById;
const createSpaceship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).json(yield (0, spaceship_respository_1.create)(req.body));
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.createSpaceship = createSpaceship;
const updateSpaceship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const updatedSpaceship = yield (0, spaceship_service_1.updateSpaceshipById)(id, body);
    if (updatedSpaceship instanceof not_found_error_1.NotFoundError) {
        res.status(404).json({ error: updatedSpaceship.message });
        return;
    }
    res.status(200).json(updatedSpaceship);
    try {
        res.status(200).json(yield (0, spaceship_respository_1.getAll)());
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.updateSpaceship = updateSpaceship;
const deleteSpaceship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedSpaceship = yield (0, spaceship_service_1.deleteSpaceshipId)(id);
        if (deletedSpaceship instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: deletedSpaceship.message });
            return;
        }
        res.status(200).json(deletedSpaceship);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.deleteSpaceship = deleteSpaceship;
