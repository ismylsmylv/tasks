import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import main from "./config";
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
// const products = [
//   {
//     title: "prod1",
//     id: 1,
//   },
//   {
//     title: "prod2",
//     id: 2,
//   },
//   {
//     title: "prod3",
//     id: 3,
//   },
// ];

const port = 8080;
const express = require("express");
const app = express();
const userRouter = require("./userRouter");

app.use("/", userRouter);
require("./config");

app.listen(port, () => {
  console.log(`running ${port}`);
});

export const GET = async (req: Request, res: Response) => {
  // let id = parseInt(req.params.prodid);
  // if (id) {
  //   console.log(id);
  //   try {
  //     let productsID = await products.findById(id);
  //     if (productsID == null) {
  //       return res.status(404).json({ message: "not found" });
  //     }
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message });
  //   }
  // } else {
  return main();
  // return NextResponse.json(products, { status: 200 });
  // }
};
