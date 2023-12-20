const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
app.use(bodyParser.json())
let arr = [
    {
        id: 1,
        name: "user1"
    },
    {
        id: 2,
        name: "user2"
    }
]
app.get('/', (req, res) => {
    res.send(arr)
})



app.get("/:id", (req, res) => {
    let filtered = arr.filter(elem => elem.id == req.params.id)
    res.send(filtered)
})

app.post("/", (req, res) => {
    req.body.id = arr.length + 1
    let data = req.body
    arr.push(data)
    res.send(arr)

})

app.delete("/:id", (req, res) => {
    arr = arr.filter(elem => elem.id != req.params.id)
    res.send(arr)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})