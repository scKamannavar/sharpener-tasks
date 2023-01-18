const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');

const app  = express();
let textfromfile = "";

app.use(bodyparser.urlencoded({extended:false}));

app.use((req, res, next)=>{
    fs.readFile('message.txt', (err, data) => {
        console.log('from file ' + data);
        textfromfile = data;   
    });
    next();
});

app.use('/login',(req, res, next)=>{
    res.sendFile('D:/sharpener/sharpener-tasks/Express/chatapp/loginform.html');
});

app.use('/loginsave',(req, res, next)=>{
    fs.readFile('message.txt', (err, data) => {
        textfromfile = data;   
    });
    // res.sendFile('D:/sharpener/sharpener-tasks/Express/chatapp/messageform.html');
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title><script>function attach()'+
    '{'+
        'document.getElementById(`usr`).value = localStorage.getItem("username");'+
    '}</script></head><body><h4 id="output">'+textfromfile+'</h4><h1>Send Message</h1><form action="/writefile" method="post" onsubmit="attach()"><input type="text" name="username" id="usr" value="" hidden> <input type="text" name="usermessage" id="msg"> <input type="submit"></form></body></html><script>document.onload=function(){console.log(inputfile);var e=new FileReader;e.onload=function(){document.getElementById("output").textContent=e.result},e.readAsText(this.files[0])}</script>');

});

app.use('/writefile',(req,res,next)=>{
    fs.appendFile('message.txt',req.body.username+':'+req.body.usermessage+'\n', (err)=>{console.log(err);})
    res.redirect('/loginsave');
});

app.use((req,res,next)=>{
    res.send('<h1>Error - 404</h1><h6>Page Not found</h6>');
    console.log('working');
});

app.listen(3000);