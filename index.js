const express = require('express')
const dotenv = require('dotenv')
const dbConnection = require('./config/db')


app = express()
dotenv.config()

// Establishing MongoDB Connection
dbConnection()

PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("\x1b[32m",`Server started at ${PORT}`)
})