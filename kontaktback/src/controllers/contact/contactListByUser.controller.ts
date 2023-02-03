import { Request, Response } from "express";
import listContactsByUserService from "../../services/contacts/listContactsByUser.service";

const contactListByUserController = async (req: Request, res: Response) => {
    try {
      const  id  = req.params.id;
      const contacts = await listContactsByUserService(id);
      
      return res.status(201).json(contacts);
      }
     catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  };
  
  export default contactListByUserController;