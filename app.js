const express = require("express");
const core = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.json({ message: "welcome to contact book application."});
});

module.exports = app;
