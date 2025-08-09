const express = require('express')
const { home } = require('./controllers/controller.js')
const indexRoute = require('./routes/index.js')
const bodyParse = require('body-parser')
const app = express()
app.use(bodyParse.json())

app.get("/", home)
app.use("/api", indexRoute)


app.listen(3000, () => {
    console.log("Server started successfully")
})