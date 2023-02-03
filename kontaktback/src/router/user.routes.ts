import { updateUserController } from './../controllers/user/updateUser.controller';
import { Router } from "express";
import listOneUserController from "../controllers/user/listOneUser.controller";
import userCreateController from "../controllers/user/userCreate.controller";
import { deleteUserController } from "../controllers/user/userDelete.controller";
import userListController from "../controllers/user/userList.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/validationAdm.middleware";

const userRouter = Router();

userRouter.post("", userCreateController);
userRouter.get("",authTokenMiddleware,isAdmMiddleware,userListController);
userRouter.get("/:id",authTokenMiddleware,listOneUserController);
userRouter.delete("/:id",authTokenMiddleware,deleteUserController);
userRouter.patch("/:id",authTokenMiddleware,updateUserController);
export default userRouter;