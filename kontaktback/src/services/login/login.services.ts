
import jwt from "jsonwebtoken";
import "dotenv/config";
import * as bcrypt  from "bcrypt";
import AppError from "../../errors/AppError";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/user";

const loginService = async (data : IUserLogin ): Promise<object> => {
  const { email , password} : IUserLogin = data;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({email});

  if (!user) {
    throw new AppError("Wrong email or password",403);
  }
  const userId = user.id
  const passwordMatches = bcrypt.compareSync(password, user.password)

  if (!passwordMatches) {
    throw new AppError("Wrong email or password",403);
  }
  
  const token : string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return {token,userId};
};

export default loginService;