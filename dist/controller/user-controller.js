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
exports.createUser = exports.loginUser = void 0;
const user_service_1 = require("../service/user-service");
const not_found_error_1 = require("../error/not-found-error");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userLogged = yield (0, user_service_1.login)(email, password);
    if (userLogged instanceof not_found_error_1.NotFoundError) {
        res.status(404).json({ error: userLogged.message });
        return;
    }
    if (userLogged instanceof Error) {
        res.status(400).json({ error: userLogged.message });
        return;
    }
    res.status(200).json(userLogged);
});
exports.loginUser = loginUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, user_service_1.createNewUser)(req.body);
    if (newUser instanceof Error) {
        res.status(400).json({ error: newUser.message });
        return;
    }
    res.status(201).json(newUser);
});
exports.createUser = createUser;
