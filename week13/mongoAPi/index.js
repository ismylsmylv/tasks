const express = require("express")


require("dotenv").config()

require("./db")

const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT
const userRouter = require("./userRouter.js")
app.use(bodyParser.json())


app.use("/", userRouter)
app.listen(port, () => {
    console.log(`running on ${port}`)
})

