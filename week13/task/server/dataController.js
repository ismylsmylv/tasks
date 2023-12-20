let singers = [
    {
        id: 1,
        name: "steve",
        age: 23,
        image: "",
        genre: "pop"
    },
    {
        id: 2,
        name: "stevenson",
        age: 34,
        image: "",
        genre: "pop"
    }, {
        id: 3,
        name: "stever",
        age: 67,
        image: "",
        genre: "pop"
    }

]


const getId = ((req, res) => {
    let filtered = singers.filter(elem => elem.id == req.params.id)
    res.send(filtered)
})

const getAll = ((req, res) => {
    if (req.query.name) {
        let filtered = singers.filter(elem => elem.name == req.query.name)
        res.send(filtered)
    }
    else {
        res.send(singers)
    }
})

const deleter = ((req, res) => {
    singers = singers.filter(elem => elem.id != req.params.id)
    res.send(singers)
})
const poster = ((req, res) => {
    let sendingData = req.body
    sendingData.id = singers.length + 1
    singers.push(sendingData)
    res.send(sendingData)
})
module.exports = { getAll, getId, deleter, poster }