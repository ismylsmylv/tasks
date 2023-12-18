const User = require("./userModel")
const getAll = async (req, res) => {
    console.log("asdasd")
    let all = await User.find({})
    console.log(all)
    res.send(all)
}

module.exports = { getAll }