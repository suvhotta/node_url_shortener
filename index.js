const express = require('express')
const dotenv = require('dotenv')
const dbConnection = require('./config/db')

app = express()
dotenv.config()

// Express Middlewares to handle POST data
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Establishing MongoDB Connection
dbConnection()

// Defining Routes
app.use('/api/shorten/', require('./routes/app'))
app.use('/', require('./routes/index'))

PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("\x1b[32m",`Server started at ${PORT}`)
})