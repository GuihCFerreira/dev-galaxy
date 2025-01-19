"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadeInput = void 0;
const validadeInput = (schema) => (req, res, next) => {
    const { success, error } = schema.safeParse(req.body);
    if (!success) {
        res.status(400).json({ error: error });
        return;
    }
    next();
};
exports.validadeInput = validadeInput;
