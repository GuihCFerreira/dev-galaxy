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
exports.deleteCharacter = exports.updateCharacter = exports.createCharacter = exports.getCharacterById = exports.getAllCharacters = void 0;
const character_repository_1 = require("../repository/character-repository");
const not_found_error_1 = require("../error/not-found-error");
const character_service_1 = require("../service/character-service");
const getAllCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield (0, character_repository_1.getAll)());
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getAllCharacters = getAllCharacters;
const getCharacterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const character = yield (0, character_service_1.findCharacterByID)(id);
        if (character instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: character.message });
            return;
        }
        res.status(200).json(character);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.getCharacterById = getCharacterById;
const createCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).json(yield (0, character_repository_1.create)(req.body));
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.createCharacter = createCharacter;
const updateCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedCharacter = yield (0, character_service_1.updateCharacterById)(id, body);
        if (updatedCharacter instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: updatedCharacter.message });
            return;
        }
        res.status(200).json(updatedCharacter);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.updateCharacter = updateCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCharacter = yield (0, character_service_1.deleteCharacterId)(id);
        if (deletedCharacter instanceof not_found_error_1.NotFoundError) {
            res.status(404).json({ error: deletedCharacter.message });
            return;
        }
        res.status(204).json(deletedCharacter);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.deleteCharacter = deleteCharacter;
