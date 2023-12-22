const express = require("express")
const app = express()
const router = require("./userRouter")
const bodyParser = require("body-parser")


app.use(bodyParser.json())

app.use("/", router)
require("./db")
app.listen(5000, () => {
    console.log(`listening on ${5000}`)
})