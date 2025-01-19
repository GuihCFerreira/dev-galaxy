"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIdParam = verifyIdParam;
const mongodb_1 = require("mongodb");
function verifyIdParam(req, res, next) {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ error: "Invalid ID. ID is required on query" });
        return;
    }
    if (!mongodb_1.ObjectId.isValid(id)) {
        res.status(400).json({
            error: "Invalid ID. ID must be a valid ObjectId and be 24 hexadecimal characters.",
        });
        return;
    }
    next();
}
