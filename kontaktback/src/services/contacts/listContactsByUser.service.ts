import { User } from './../../entities/user.entity';
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from '../../errors/AppError';





const listContactsByUserService = async (id:string) => {
    const contactOfUser = AppDataSource.getRepository(Contacts).find({
        relations:['user'],
        where:{
            user:{id}
        }
    })
    

  
    if (!contactOfUser) {
      throw new AppError("Don't have contacts yet",404);
    }
  
    return contactOfUser;
  };
  
  export default listContactsByUserService;