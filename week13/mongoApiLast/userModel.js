const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    username: String,
}, { collection: "USERAPI" })

module.exports = mongoose.model("USERAPI", schema)