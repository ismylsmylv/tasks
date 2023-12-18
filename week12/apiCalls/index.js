const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000
app.use(bodyParser.json())

let arr = [
    {
        id: 1, name: "john"
    },
    {
        id: 2, name: "doe"
    },
    {
        id: 3, name: "doeeee"
    }
]

app.get("/", (req, res) => {
    res.send("<p>Test</p>")
})


app.get("/users", (req, res) => {
    res.send(arr)
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const elemId = arr.find(elem => elem.id == id)
    res.send(elemId)
})



app.post("/users/", (req, res) => {
    const elem = req.body
    arr.push(elem)
    res.send(arr)
})



app.listen(port, () => {
    console.log(`Example app on port ${port}`)
})