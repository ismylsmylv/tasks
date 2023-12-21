const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    id: Number
}, {
    collection: "userDb"
})

module.exports = mongoose.model('userDb', userSchema)