const port = 5000
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userRouter = require("./userRouter")
app.use("/", userRouter)
require("./db")
app.listen(port, () => {
    console.log(`listen on ${port}`)
})