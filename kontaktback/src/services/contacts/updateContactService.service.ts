import { IContactRequest } from './../../interfaces/contact/index';
import { AppDataSource } from "../../data-source";
import AppError from '../../errors/AppError';
import { Contacts } from '../../entities/contact.entity';





export const updateContactService = async (id:string,{name, email,telephone,userId}:IContactRequest) => {
	const contactRepository = AppDataSource.getRepository(Contacts);
	const contacts = await contactRepository.find();

    let isContact = contacts.find(contact => contact.id === id)
    

    if(!isContact){
        throw new AppError('Contact not found', 404)
    }
    
    else{
    const contact = new Contacts()
    contact.name = name? name : isContact.name
    contact.email = email? email : isContact.email
    contact.telephone = telephone? telephone : isContact.telephone
    contact.user= isContact.user;
    await contactRepository.update(isContact!.id, contact)
    const contactUpdate = await contactRepository.findOneBy({id})

	return contactUpdate
    }
};