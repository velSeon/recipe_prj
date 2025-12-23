const express = require('express');
const helmet = require('helmet');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.get("/", function(req,rest){
    rest.send("Hello World")
})

app.get("/about", function(req,res){
    res.send("About page")
})

app.listen(PORT, function(req,rest){
    console.log(`Server running on http://localhost:${PORT}`);
})