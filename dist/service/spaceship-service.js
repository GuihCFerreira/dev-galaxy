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
exports.deleteSpaceshipId = exports.updateSpaceshipById = exports.findSpaceshipByID = void 0;
const not_found_error_1 = require("../error/not-found-error");
const spaceship_respository_1 = require("../repository/spaceship-respository");
const findSpaceshipByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const spaceship = yield (0, spaceship_respository_1.getById)(id);
    if (!spaceship) {
        return new not_found_error_1.NotFoundError("Spaceship not found");
    }
    return spaceship;
});
exports.findSpaceshipByID = findSpaceshipByID;
const updateSpaceshipById = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const spaceship = yield (0, spaceship_respository_1.getById)(id);
    if (!spaceship) {
        return new not_found_error_1.NotFoundError("Spaceship not found");
    }
    const updatedSpaceship = yield (0, spaceship_respository_1.update)(id, body);
    return updatedSpaceship;
});
exports.updateSpaceshipById = updateSpaceshipById;
const deleteSpaceshipId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const spaceship = yield (0, spaceship_respository_1.getById)(id);
    if (!spaceship) {
        return new not_found_error_1.NotFoundError("Spaceship not found");
    }
    const deletedSpaceship = yield (0, spaceship_respository_1.deleteSpaceshipById)(id);
    return deletedSpaceship;
});
exports.deleteSpaceshipId = deleteSpaceshipId;
