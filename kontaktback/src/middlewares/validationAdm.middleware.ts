import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/AppError";
import handleError from "./handleError.middleware";



const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user;

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const userRequested = users.find((user) => user.id === id);

    if (!userRequested?.isAdm) {
      throw new AppError("You are not an admin",403);
    } else {
      next();
    }
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default isAdmMiddleware;