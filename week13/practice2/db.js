const mongoose = require("mongoose")
require("dotenv").config()
console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected")
})