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
exports.deletePlanet = exports.updatePlanet = exports.createPlanet = exports.getPlanetById = exports.getAllPlanets = void 0;
const planet_respository_1 = require("../repository/planet-respository");
const planet_service_1 = require("../service/planet-service");
const not_found_error_1 = require("../error/not-found-error");
const getAllPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield (0, planet_respository_1.getAll)());
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getAllPlanets = getAllPlanets;
const getPlanetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const planet = yield (0, planet_service_1.findPlanetByID)(id);
        if (planet instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: planet.message });
            return;
        }
        res.status(200).json(planet);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getPlanetById = getPlanetById;
const createPlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).json(yield (0, planet_respository_1.create)(req.body));
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.createPlanet = createPlanet;
const updatePlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedPlanet = yield (0, planet_service_1.updatePlanetById)(id, body);
        if (updatedPlanet instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: updatedPlanet.message });
            return;
        }
        res.status(200).json(updatedPlanet);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.updatePlanet = updatePlanet;
const deletePlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedPlanet = yield (0, planet_service_1.deletePlanetId)(id);
        if (deletedPlanet instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: deletedPlanet.message });
            return;
        }
        res.status(204).send(deletedPlanet);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.deletePlanet = deletePlanet;
