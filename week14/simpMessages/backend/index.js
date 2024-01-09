const express = require("express");
const { createServer } = require("node:http");

const { Server } = require("socket.io");
const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});


io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("message", (message) => {
        console.log(message, socket.id);
        io.emit("message", message);
    });
});

server.listen(3000, "0.0.0.0", () => {
    console.log(`Example app listening on port`);
});