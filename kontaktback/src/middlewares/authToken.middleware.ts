import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppError";
import handleError from "./handleError.middleware";


const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError("Invalid token",401);
    }

    token = token.split(" ")[1];

    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        if (error) {
          throw new AppError("Invalid token",401);
        }

        req.user = {
          isAdm: decoded.isAdm,
          id: decoded.sub,
        };

        next();
      }
    );
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default authTokenMiddleware;