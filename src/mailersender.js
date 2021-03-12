var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {sendEmail} = require("../mail");
var app  = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/email", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('hello this is from server js');
    //res.send(req.body.json);
    //res.render(req.body.json);
    //console.log(req.body);
    sendEmail(req.body.email, req.body.comment, "hello");
})
