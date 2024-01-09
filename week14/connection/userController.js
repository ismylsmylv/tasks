const users = require("./userModel")

const getAll = async (req, res) => {
    let all = await users.find({})
    res.send(all)
}

module.exports = { getAll }