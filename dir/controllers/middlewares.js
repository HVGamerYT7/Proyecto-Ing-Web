"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : 'secretkey';
const verifyToken = (req, res, next) => {
    const token = req.cookies['token'];
    console.log('Token from cookies:', token);
    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.verifyToken = verifyToken;
