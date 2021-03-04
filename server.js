var express = require('express');

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

var app  = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.post("http://localhost:8086/api/sendMail", (req, res) => {
    console.log(req.body)
    sendEmail(req.body.email, req.body.comment, "hello")
});

app.listen(8086, () => {
    console.log("Server Running at 8086");
});