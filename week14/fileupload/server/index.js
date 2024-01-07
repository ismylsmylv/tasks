const express = require('express');
const app = express();
const multer = require("multer");
const port = 4000;
// const upload = multer({ dest: "uploads/" });
const fs = require("fs")
// Require the upload middleware
// const upload = require('./upload');
const arr = []

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
})

const upload = multer({ storage: storage })


app.use('/uploads', express.static('uploads'));
// Set up a route for file upload   ms
// app.post('/upload', upload.single('file'), (req, res) => {
//     // Handle the uploaded file
//     res.sendFile(req.body)
//     res.json({ message: 'File uploaded successfully!' });
// });
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    const { title } = req.body;
    console.log('body: ', req.body);
    const newProd = {
        title: title,
        imagePath: req.file.path
    }
    arr.push(newProd)
    res.sendFile(req.body)
    res.json({ message: 'File uploaded successfully!' });
    req.send({
        message: "Uploaded", data: {
            title: newProd.title,
            filePath: `http://localhost:7070/${newProd.imagePath}`
        }
    })
});


app.use('/uploads', express.static('uploads'));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});