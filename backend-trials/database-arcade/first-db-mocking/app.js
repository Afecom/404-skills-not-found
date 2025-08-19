import express from 'express'
import sequelize from './db/sequelize.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const initializeDatabase = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({alter: true})
        console.log("The database is successfully connected and synced")
    }
    catch(error){
        console.log("There was a problem when trying to connect to the database!", error)
        process.exit(1)
    }
}

initializeDatabase();

app.listen(3000, () => {
    console.log("The server is up and running on port 3000")
})