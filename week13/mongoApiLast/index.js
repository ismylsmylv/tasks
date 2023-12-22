const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 4000
const router = require("./userRouter")
app.use(bodyParser.json())
app.use("/", router)
// app.get("/", (req, res) => {
//     res.send("fdsdfss")
// })
require("./db")


app.listen(port, () => {
    console.log(`listen on ${port}`)
})
