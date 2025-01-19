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
exports.deletePlanetId = exports.updatePlanetById = exports.findPlanetByID = void 0;
const not_found_error_1 = require("../error/not-found-error");
const planet_respository_1 = require("../repository/planet-respository");
const findPlanetByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const planet = yield (0, planet_respository_1.getById)(id);
    if (!planet) {
        return new not_found_error_1.NotFoundError("Planet not found");
    }
    return planet;
});
exports.findPlanetByID = findPlanetByID;
const updatePlanetById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const planet = yield (0, planet_respository_1.getById)(id);
    if (!planet) {
        return new not_found_error_1.NotFoundError("Planet not found");
    }
    const updatePlanet = yield (0, planet_respository_1.update)(id, data);
    return updatePlanet;
});
exports.updatePlanetById = updatePlanetById;
const deletePlanetId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const planet = yield (0, planet_respository_1.getById)(id);
    if (!planet) {
        return new not_found_error_1.NotFoundError("Planet not found");
    }
    return yield (0, planet_respository_1.deletePlanetById)(id);
});
exports.deletePlanetId = deletePlanetId;
