import { IUserRequest } from './../../interfaces/user/index';
import { AppDataSource } from "../../data-source";
import { User } from '../../entities/user.entity';
import AppError from '../../errors/AppError';
import { compareSync, hashSync } from 'bcrypt';





export const updateUserService = async (id:string,{name, email, password, isAdm,telephone}:IUserRequest) => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();

    let isUser = users.find(user => user.id === id)

    if(!isUser){
        throw new AppError('User not found', 404)
    }
    
    let newPassword = ''
    if(password){
        if(compareSync(password, isUser!.password)) {
            throw new AppError("Inform a different password.",400)
        }
        newPassword = hashSync(password,10)
    }

    const user = new User()
    user.name = name? name : isUser.name
    user.email = email? email : isUser.email
    user.password = password? newPassword : isUser.password
    user.isAdm = isAdm? isAdm : isUser.isAdm
    user.telephone = telephone? telephone : isUser.telephone

    await userRepository.update(isUser!.id, user)
    const userUpdate = await userRepository.findOneBy({id})

	return userUpdate
};