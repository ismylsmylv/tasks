const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: String,
    email: String,
})

module.exports = mongoose.model("users", schema)