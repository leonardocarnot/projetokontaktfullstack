import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const userId = id;
    const { name, email, telephone } = req.body;
    const contact = await createContactService({
      userId,
      name,
      email,
      telephone,
    });
    return res.status(201).json(contact);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default contactCreateController;
