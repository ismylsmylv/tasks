const port = 4000
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const prodRouter = require("./prodRouter")
app.use(bodyParser.json())
app.use("/", prodRouter)
require("./db")
const Products = require("./prodModel")

app.listen(port, () => {
    console.log(`running ${port}`)
})