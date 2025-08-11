import express from 'express'
import NotFoundHandler from './middlewares/notFoundHandler.middleware.js'
import { indexRouter } from './routes/index.route.js'
import errorHandler from './middlewares/errorHandler.js'
const app = express()

app.use(express.json())
app.use('/api', indexRouter)
app.use(NotFoundHandler)
app.use(errorHandler)


app.listen(3000, () => {
    console.log("The server is up and running on port 3000")
})