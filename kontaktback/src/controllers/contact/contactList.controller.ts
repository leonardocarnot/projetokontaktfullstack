import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContact.service";

const contactListController = async (req: Request, res: Response) => {
  try {
    const user = req.user
    const contacts = await listContactsService();
    
    return res.status(201).json(contacts);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default contactListController;
