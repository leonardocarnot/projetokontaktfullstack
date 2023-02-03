import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

export const deleteUserService = async (id:string) => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();

    const userDeleted = users.find(user => user.id === id)

    if(!userDeleted){
        throw new AppError('User not found.',404)
    }

    await userRepository.remove(userDeleted)
}