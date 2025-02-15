const Products = require("./prodModel")


const getAll = async (req, res) => {
    if (!req.query.name && !req.query.price) {
        let all = await Products.find({});
        console.log(all);
        res.send(all);
    } else if (req.query.price) {
        let sent = await Products.find({ price: req.query.price });
        console.log("price", sent);
        res.send(sent);
    } else if (req.query.name) {
        let sent = await Products.find({ name: req.query.name });
        console.log("name", sent);
        res.send(sent)
    }
}


const getID = async (req, res) => {
    let filtered = await Products.findById(req.params.id)
    res.send(filtered)
}

const deleteProd = async (req, res) => {
    await Products.findByIdAndDelete(req.params.id)
    res.json({ message: "deleted" })
}
const postProd = async (req, res) => {
    const elem = await Products.create(req.body)
    res.json(elem)
}
module.exports = { getAll, getID, deleteProd, postProd }
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