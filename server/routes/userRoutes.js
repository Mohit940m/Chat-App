import express from "express"

import { checkAuth,Login,signUp,updateProfile } from "../controllers/User.controller.js"
import { protectRoute } from "../middlewares/auth.js"

const userRouter=express.Router()

userRouter.post('/login',Login);
userRouter.post('/signup',signUp);
userRouter.post('/updateprofile',protectRoute,updateProfile);
userRouter.get('/check',protectRoute,checkAuth);

export default userRouter