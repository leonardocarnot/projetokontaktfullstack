
import userCreateController from "../../controllers/user/userCreate.controller";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from "../../errors/AppError";



const listContactsService = async () => {
    const contactRepository = AppDataSource.getRepository(Contacts);
  
    const contacts = await contactRepository.find();
  
    if (!contacts) {
      throw new AppError("No properties available",404);
    }
  
    return contacts;
  };
  
  export default listContactsService;