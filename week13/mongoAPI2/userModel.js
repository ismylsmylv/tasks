const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
}, {
    collection: "Users"
})

module.exports = mongoose.model("Users", schema)