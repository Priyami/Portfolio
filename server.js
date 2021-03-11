var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {sendEmail} = require("./src/mail");
var app  = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/email', (req, res) => {
    res.send('hello');
    console.log(req.body);
    sendEmail(req.body.email, req.body.comment, "hello")
})
app.listen(3000, () => {
    console.log("Server Running at 3000");
})