import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import handleError from "../../middlewares/handleError.middleware";
import loginService from "../../services/login/login.services";

const loginController = async (req: Request, res: Response) => {
  try {
    const token = await loginService(req.body);
    return res.status(200).json(token);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default loginController;