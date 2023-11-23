"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : 'secretkey';
function authGuard(req, res, next) {
    const authHeader = req.header('authorization');
    if (!authHeader) {
        res.status(401).send({
            message: 'Error: No se ha recibido el token de autenticación',
        });
        return;
    }
    const token = authHeader.replace('Bearer ', '');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.token = decoded;
        next();
    }
    catch (error) {
        res.status(401).send({
            message: 'Error: Token de autenticación inválido',
        });
        return;
    }
}
exports.default = {
    authGuard,
};
