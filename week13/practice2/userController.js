const Users = require("./userModel")

const getAll = async (req, res) => {
    let all = await Users.find({})
    console.log("all", all)
    res.send(all)
}
const getId = async (req, res) => {
    let sent = await Users.findById(req.params.id)
    res.send(sent)
}
module.exports = { getAll, getId }