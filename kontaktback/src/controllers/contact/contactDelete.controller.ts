import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts/deleteContact.service";


export const contactDeleteController= async (req :Request, res: Response) => {
    try {
        const id = req.params.id

        await deleteContactService(id);
        return res.status(204).json("Contact deleted");
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
              error: err.name,
              message: err.message,
            });
          }
    }
}