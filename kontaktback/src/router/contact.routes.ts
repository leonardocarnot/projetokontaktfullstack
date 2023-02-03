import { updateContactController } from './../controllers/contact/contactUpdate.controller';
import { Router } from "express";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import { contactDeleteController } from "../controllers/contact/contactDelete.controller";
import contactListController from "../controllers/contact/contactList.controller";
import contactListByUserController from "../controllers/contact/contactListByUser.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/validationAdm.middleware";

const contactRouter = Router();

contactRouter.post("", authTokenMiddleware, contactCreateController);
contactRouter.get("", authTokenMiddleware,isAdmMiddleware, contactListController);
contactRouter.delete("/:id",authTokenMiddleware,contactDeleteController);
contactRouter.get("/:id",authTokenMiddleware,contactListByUserController);
contactRouter.patch("/:id",authTokenMiddleware,updateContactController);

export default contactRouter;
