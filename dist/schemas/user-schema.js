"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = exports.loginUserSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("./enums");
const loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email({
        message: "Invalid email",
    }),
    password: zod_1.z.string().min(8, {
        message: "Password must have at least 8 characters",
    }),
});
exports.loginUserSchema = loginUserSchema;
const createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email({
        message: "Invalid email",
    }),
    password: zod_1.z.string().min(8, {
        message: "Password must have at least 8 characters",
    }),
    affiliation: enums_1.affiliationEnum,
});
exports.createUserSchema = createUserSchema;
