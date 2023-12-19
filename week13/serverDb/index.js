const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 4000
const data = require("./db.json")
app.use(bodyParser.json())


app.get("/products/", (req, res) => {
    if (!req.query.name && !req.query.price) {
        console.log("all")
        res.send(data.products)
    }
    if (req.query.price) {
        const sent = data.products.filter(elem => elem.price == (req.query.price))
        console.log("sentprice")
        res.send(sent)
    }
    else {
        if (req.query.price) {
            const sent = data.products.filter(elem => elem.price == (req.query.price))
            console.log("sentprice")
            res.send(sent)
        }
        else {
            const sent = data.products.filter(elem => elem.name.includes(req.query.name))
            console.log("sent")
            console.log(req.query.price)
            res.send(sent)
        }
    }
    res.send(data.products)
})
app.get("/:id", (req, res) => {
    const id = req.params.id
    const elemID = data.products.find(elem => elem.id == id)
    res.send(elemID)
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})

const Products = require("./userModel")
const getAll = async (req, res) => {
    // console.log("get")
    // let all = await data.products.find({})
    // console.log(all)
    res.send(data.products)
}


const getId = async (req, res) => {

    const item = await User.findById(req.params.id);
    res.json(item);
};


const router = require("express").Router();

router.get("/", getAll);
router.get("/:id", getId);


