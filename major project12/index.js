const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, "../major project12");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hey Ther ...")
});

app.listen(800, () => {
    console.log("Listining at port 800");
})