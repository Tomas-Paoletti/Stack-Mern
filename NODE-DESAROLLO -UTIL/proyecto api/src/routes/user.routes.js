/* eslint-disable no-undef */
 import userLoginDTO from "#Dto/user-login.dto.js";
import userRegisterDTO  from "#Dto/user-register.dto.js";

// import userUnregisterDTO from "#Dto/userUnregister.dto.js";
import { Router } from "express";
import userProfileController from "../controllers/user-Profile.Controller.js";
import userLoginController from "../controllers/user-Login.Controller.js";
import userRegisterController from "../controllers/user-Register.Controller.js";
import userJWTDTO from "#Dto/user-jwt.dto.js";
import userUpdateDataController from "../controllers/user-UpdateData.Controller.js";
import userUpdateDataDTO from "#Dto/user-update-data.dto.js";
import userUpdateEmailController from "../controllers/user-UpdateEmail.Controller.js";
import userUpdatePasswordController from "../controllers/user-UpdatePassword.Controller .js";
import userUpdateEmailDTO from "#Dto/user-update-email.dto.js";
import userUpdatePasswordDTO from "#Dto/user-update-password.dto.js";
import userUnregisterDTO from "#Dto/userUnregister.dto.js";
import userUnregisteredEmailController from "../controllers/user-Unregistered.Controller.js";


 const userRouter = Router()


 userRouter.post('/register', userRegisterDTO, userRegisterController
 )

  userRouter.post('/login', userLoginDTO ,userLoginController)

  userRouter.get('/profile',userJWTDTO, userProfileController)

  userRouter.patch('/update-data',userJWTDTO,userUpdateDataDTO, userUpdateDataController)
  userRouter.patch('/update-email',userJWTDTO,userUpdateEmailDTO ,userUpdateEmailController)
  userRouter.patch('/update-password',userJWTDTO,userUpdatePasswordDTO, userUpdatePasswordController)
  userRouter.delete('/delete-user',userJWTDTO, userUnregisterDTO, userUnregisteredEmailController)


 export default userRouter 