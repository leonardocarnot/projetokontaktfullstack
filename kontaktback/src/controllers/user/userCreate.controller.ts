import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, telephone, isAdm } = req.body;
    const newUser = await userCreateService({
      name,
      email,
      password,
      telephone,
      isAdm,
    });

    return res.status(201).json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
