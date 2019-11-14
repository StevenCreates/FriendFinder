const express = require("express");
const handlebr = require("handlebars");
const app = express();

app.all('/',(req, res)=>{

    res.send('<h1>this is a test</h1>')
});

app.use(express.static('public'))

// app.get('/',(req, res)=>{

// });

app.listen(3000);