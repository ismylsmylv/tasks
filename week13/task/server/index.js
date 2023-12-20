const port = 4000
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const datarouter = require("./dataRouter")

app.use(bodyParser.json())
app.use(cors())
app.use("/", datarouter)
app.listen(port, () => {
    console.log(`running ${port}`)
})