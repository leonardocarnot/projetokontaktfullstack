import { IUser, IUserLogin, IUserRequest } from "../../interfaces/user";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userCreateService = async ({
  name,
  email,
  telephone,
  isAdm,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyExists = await userRepository.findOneBy({ email });
  const telephoneAlreadyExists = await userRepository.findOneBy({ telephone });

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  if (telephoneAlreadyExists) {
    throw new Error("Telephone already exists");
  }

  const hashedPassword = await hash(password, 10);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    telephone,
    isAdm,
    password: hashedPassword,
    createdAt: new Date(),
  };

  userRepository.create(newUser)
  await userRepository.save(newUser);

  return { ...newUser, password: undefined };
};

export default userCreateService;
