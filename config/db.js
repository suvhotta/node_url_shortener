const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI



async function connectDB(){
    try {
        await mongoose.connect(MONGO_URI,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true 
            })
        console.log("\x1b[32m",'MongoDB Connected...')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB