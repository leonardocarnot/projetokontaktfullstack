import { IContactRequest } from './../../interfaces/contact/index';
import { IUserRequest } from './../../interfaces/user/index';
import { Request, Response } from "express";
import { updateUserService } from '../../services/user/updateUser.service';
import { updateContactService } from '../../services/contacts/updateContactService.service';

export const updateContactController = async (
	req: Request,
	res: Response
) => {
	const id = req.params.id;
	const userId = req.user.id;
	const { name, email, telephone }: IContactRequest = req.body;

	const contact = await updateContactService(id, {
		userId,
		name,
		email,
        telephone
	});
	return res.status(200).json(contact);
};