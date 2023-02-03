import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const listOneUserService = async (id:string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const isUser = users.find(user => user.id === id)

  if(!isUser){
    throw new AppError('User not found',404)
}
    return isUser;
};

export default listOneUserService;