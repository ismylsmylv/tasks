const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name: String,
        order: Number
    },
    {
        collection: "userOrders",
        timestamps: true
    }
)
const Users = mongoose.model("userOrders", userSchema)

module.exports = Users 