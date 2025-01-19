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
exports.deleteStarsystemId = exports.updateStarsystemById = exports.findStarsystemByID = void 0;
const not_found_error_1 = require("../error/not-found-error");
const starsystem_repository_1 = require("../repository/starsystem-repository");
const findStarsystemByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const starsystem = yield (0, starsystem_repository_1.getById)(id);
    if (!starsystem) {
        return new not_found_error_1.NotFoundError("Starsystem not found");
    }
    return starsystem;
});
exports.findStarsystemByID = findStarsystemByID;
const updateStarsystemById = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const starsystem = yield (0, starsystem_repository_1.getById)(id);
    if (!starsystem) {
        return new not_found_error_1.NotFoundError("Starsystem not found");
    }
    const updatedStarsystem = yield (0, starsystem_repository_1.update)(id, body);
    return updatedStarsystem;
});
exports.updateStarsystemById = updateStarsystemById;
const deleteStarsystemId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const starsystem = yield (0, starsystem_repository_1.getById)(id);
    if (!starsystem) {
        return new not_found_error_1.NotFoundError("Starsystem not found");
    }
    const deletedStarsystem = yield (0, starsystem_repository_1.deleteStarsystemById)(id);
    return deletedStarsystem;
});
exports.deleteStarsystemId = deleteStarsystemId;
