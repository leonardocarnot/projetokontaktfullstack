import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import { IContactRequest } from "./../../interfaces/contact/index";
import { v4 as uuidv4 } from "uuid";

const createContactService = async ({
  userId,
  name,
  email,
  telephone,
}: IContactRequest) => {
  const usersRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contacts);

  const users = await usersRepository.findOneBy({ id: userId });
  console.log(users)
  const newContact = {
    id: uuidv4(),
    name,
    email,
    telephone,
    user: users!,
    createdAt: new Date(),
  };

  contactRepository.create(newContact)
  await contactRepository.save(newContact);
  return newContact;
};

export default createContactService;
