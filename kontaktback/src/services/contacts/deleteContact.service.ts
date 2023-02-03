import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";

import AppError from "../../errors/AppError";

export const deleteContactService = async (id:string) => {
	const contactRepository = AppDataSource.getRepository(Contacts);
	const contacts = await contactRepository.find();

    const contactDeleted = contacts.find(contact => contact.id === id)

    if(!contactDeleted){
        throw new AppError('Contact not found.',404)
    }

    await contactRepository.remove(contactDeleted)
}