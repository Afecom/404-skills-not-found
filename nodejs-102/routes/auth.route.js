import { Login, GetUsers, RegisterUser, GetUserById, ForgotPassword, ResetPassword, UpdateUser } from "../controllers/auth.controller.js";
import { Router } from "express";
export const authRouter = Router()

authRouter.post('/login', Login)
authRouter.get('/users', GetUsers)
authRouter.post('/register', RegisterUser)
authRouter.get('/user/:id', GetUserById)
authRouter.post('/forgot-password', ForgotPassword)
authRouter.post('/reset-password', ResetPassword)
authRouter.put('/update-user/:id', UpdateUser)