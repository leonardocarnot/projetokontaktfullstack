import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await deleteUserService(id);
    return res.status(204).json("User deleted");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
