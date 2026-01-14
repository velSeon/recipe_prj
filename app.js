const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./router/auth');
// const helmet = require('helmet');
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3000;

// app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));

app.use('/auth', authRoutes);


app.get("/", function(req,rest){
    rest.send("Hello World!!!!!-------!!!")
})

app.get("/about", function(req,res){
    res.send("About page")
})

app.listen(PORT, function(req,rest){
    console.log(`Server running on http://localhost:${PORT}`);
})



