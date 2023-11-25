import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

interface Request extends ExpressRequest {
  user?: jwt.JwtPayload;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies['token'];

  console.log('Token from cookies:', token);

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: "Invalid token" });
  }
};