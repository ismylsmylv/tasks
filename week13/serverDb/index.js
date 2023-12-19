const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const userRouter = require("./userRouter");
// const data = require("./db.json")
require("dotenv").config()
app.use(bodyParser.json())
app.use("/", userRouter);

require("./db")
// app.get("/products/", (req, res) => {
//     if (!req.query.name && !req.query.price) {
//         console.log("all")
//         res.send(data.products)
//     }
//     if (req.query.price) {
//         const sent = data.products.filter(elem => elem.price == (req.query.price))
//         console.log("sentprice")
//         res.send(sent)
//     }
//     else {
//         if (req.query.price) {
//             const sent = data.products.filter(elem => elem.price == (req.query.price))
//             console.log("sentprice")
//             res.send(sent)
//         }
//         else {
//             const sent = data.products.filter(elem => elem.name.includes(req.query.name))
//             console.log("sent")
//             console.log(req.query.price)
//             res.send(sent)
//         }
//     }
//     res.send(data.products)
// })
// app.get("/:id", (req, res) => {
//     const id = req.params.id
//     const elemID = Products.find(elem => elem.id == id)
//     res.send(elemID)
// })



// console.log(Products)

// app.get("/products/", (req, res) => {
//     res.send(Products)
// })
app.listen(port, () => {
    console.log(`running on ${port}`)
})
