const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())


//model
const Prods = mongoose.model("Prods", new mongoose.Schema({
    name: String,
    price: String,
}))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//crud

app.get("/prods", async (req, res) => {
    const prods = await Prods.find({})
    res.send({ data: prods })
})

app.post("/prods", async (req, res) => {
    const sendProd = new Prods({ name: req.body.name, price: req.body.price })
    await sendProd.save()
    res.send({ message: "sent" })
})
app.delete("/prods/:id", async (req, res) => {
    const id = req.params.id
    const deletedProd = await Prods.findByIdAndDelete(id)
    res.send({ message: "deleted" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://ismayil:ismayil@cluster0.r9n0zqw.mongodb.net/Prods?retryWrites=true&w=majority").then(res => {
    console.log("connected")
})