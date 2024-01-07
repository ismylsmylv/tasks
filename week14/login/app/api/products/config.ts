require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
  console.log(process.env.MONGODB);
  await mongoose.connect(process.env.MONGODB).then(() => {
    console.log("connected");
  });
}

export default main;
