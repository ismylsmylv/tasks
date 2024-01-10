const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: Boolean,
    born: Date,
    genre: String,
    isDead: Boolean,
    img: String
}, {
    collection: "authors"
})

module.exports = mongoose.model("authors", schema)