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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createNewUser = void 0;
const user_repository_1 = require("../repository/user-repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const not_found_error_1 = require("../error/not-found-error");
const createNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield (0, user_repository_1.findUserByEmail)(user.email);
    if (userExists) {
        return Error("User already exists");
    }
    const hashPassword = yield bcrypt_1.default.hash(user.password, Number(process.env.SALT_BCRYPT));
    user.password = hashPassword;
    const newUser = yield (0, user_repository_1.signInUser)(user);
    const token = yield generateToken(newUser.id);
    return Object.assign(Object.assign({}, newUser), { token });
});
exports.createNewUser = createNewUser;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repository_1.findUserByEmail)(email);
    if (!user) {
        return new not_found_error_1.NotFoundError("User not found");
    }
    const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        return Error("Password does not match");
    }
    const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
    const token = yield generateToken(user.id);
    return Object.assign(Object.assign({}, userWithoutPassword), { token });
});
exports.login = login;
const generateToken = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not found in .env file");
    }
    return jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
});
