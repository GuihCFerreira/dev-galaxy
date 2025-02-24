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
exports.findUserByEmail = exports.signInUser = exports.findUserByEmailAndPassword = void 0;
const prisma_1 = require("../database/prisma");
const findUserByEmailAndPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.users.findFirst({
        where: {
            email,
            password,
        },
    });
});
exports.findUserByEmailAndPassword = findUserByEmailAndPassword;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.users.findFirst({
        where: {
            email,
        },
    });
});
exports.findUserByEmail = findUserByEmail;
const signInUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.db.users.create({
        data: user,
        omit: {
            password: true,
        },
    });
});
exports.signInUser = signInUser;
