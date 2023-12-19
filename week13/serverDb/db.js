const mongoose = require("mongoose")
require("dotenv").config()
console.log(process.env.MONGODB)
mongoose.connect(process.env.MONGODB).then(() => {
    console.log("connected")
})
