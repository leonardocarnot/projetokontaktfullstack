import { Request, Response } from "express";
import listOneUserService from "../../services/user/listOneUser.service";
import listUsersService from "../../services/user/listUsers.service";

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const users = await listOneUserService(id);
    
    return res.status(201).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listOneUserController;