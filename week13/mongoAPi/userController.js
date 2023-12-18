const User = require("./userModel")
const getAll = async (req, res) => {
    console.log("asdasd")
    let all = await User.find({})
    console.log(all)
    res.send(all)
}
const getId = async (req, res) => {
    const id = req.params;
    const elemById = User.filter((elem) => elem.id == id);
    console.log(elemById)
    res.send(elemById);
}
module.exports = { getAll, getId }