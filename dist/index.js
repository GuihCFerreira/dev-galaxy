"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || "3000";
app.use(routes_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (0, database_1.connectToDatabase)();
});
