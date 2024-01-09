const port = 4000
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userRouter = require("./userRouter")
app.use(bodyParser.json())
app.use("/", userRouter)

app.listen(port, () => {
    console.log(port)
})