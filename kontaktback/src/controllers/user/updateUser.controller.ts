import { IUserRequest } from './../../interfaces/user/index';
import { Request, Response } from "express";
import { updateUserService } from '../../services/user/updateUser.service';

export const updateUserController = async (
	req: Request,
	res: Response
) => {
	const id = req.params.id;
	const { name, email, password, isAdm, telephone }: IUserRequest = req.body;

	const user = await updateUserService(id, {
		name,
		email,
		password,
		isAdm,
        telephone
	});
	return res.status(200).json(user);
};