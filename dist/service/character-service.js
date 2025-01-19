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
exports.deleteCharacterId = exports.updateCharacterById = exports.findCharacterByID = void 0;
const not_found_error_1 = require("../error/not-found-error");
const character_repository_1 = require("../repository/character-repository");
const findCharacterByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const character = yield (0, character_repository_1.getById)(id);
    if (!character) {
        return new not_found_error_1.NotFoundError("Character not found");
    }
    return character;
});
exports.findCharacterByID = findCharacterByID;
const updateCharacterById = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const character = yield (0, character_repository_1.getById)(id);
    if (!character) {
        return new not_found_error_1.NotFoundError("Character not found");
    }
    const updatedCharacter = yield (0, character_repository_1.update)(id, body);
    return updatedCharacter;
});
exports.updateCharacterById = updateCharacterById;
const deleteCharacterId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const character = yield (0, character_repository_1.getById)(id);
    if (!character) {
        return new not_found_error_1.NotFoundError("Character not found");
    }
    const deletedCharacter = yield (0, character_repository_1.deleteCharacterById)(id);
    return deletedCharacter;
});
exports.deleteCharacterId = deleteCharacterId;
