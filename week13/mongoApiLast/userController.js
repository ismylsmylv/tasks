const USERAPI = require("./userModel")


const getAll = async (req, res) => {
    let all = await USERAPI.find({})
    res.send(all)
}

module.exports = { getAll }