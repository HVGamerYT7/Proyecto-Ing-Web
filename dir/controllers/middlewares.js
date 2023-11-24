"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const verifyToken = (req, res, next) => {
    const cookies = req.cookies;
    const token = cookies ? cookies.token : undefined;
    if (token) {
        next();
    }
    else {
        res.status(401).json({ message: 'El token no existe' });
    }
};
exports.verifyToken = verifyToken;
app.use(exports.verifyToken);
