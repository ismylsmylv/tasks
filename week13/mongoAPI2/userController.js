const Users = require("./userModel")

let arr = [
    {
        name: "dssdd"
    }
]


const getAll = async (req, res) => {
    let all = await Users.find({})
    console.log(all)
    res.send(all)
}

module.exports = { getAll }