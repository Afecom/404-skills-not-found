import { authRouter } from './auth.route.js'
import { Router } from 'express'
export const indexRouter = Router()

indexRouter.use('/auth', authRouter)
