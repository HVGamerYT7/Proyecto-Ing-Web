
import { Request, Response, NextFunction } from 'express';

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const cookies = req.cookies;
  const token = cookies ? cookies.token : undefined;

  if (token) {
    next();
  } else {
    res.status(401).json({ message: 'El token no existe' });
  }
};

app.use(verifyToken);