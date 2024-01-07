const express = require("express");
const app = express();
const port = 7070;
const multer = require("multer");
const fs = require("fs");

//static db
const arr = [];


// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadFolder = "./uploads/";
        if (!fs.existsSync(uploadFolder)) {
            fs.mkdirSync(uploadFolder);
        }
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//users post request
app.post("/users", upload.single("imageFile"), (req, res) => {
    console.log('body: ', req.body);
    const { title } = req.body;
    console.log('files: ', req.files)
    console.log('file: ', req.file);

    const newUser = {
        title: title,
        profilePicture: req.file.path
    }

    arr.push(newUser);
    //post
    res.send({
        message: "File uploaded successfully!", data: {
            title: newUser.title,
            fullPath: `http://localhost:7070/${newUser.profilePicture}`
        }
    });
});

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});