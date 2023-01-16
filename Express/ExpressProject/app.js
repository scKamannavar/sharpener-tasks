// const http = require('http');

const express = require('express');
const app = express();
app.use((req, res, next)=>{
    console.log('First Middleware');
    next();
});

app.use((req, res, next)=>{
    console.log('Second middleware');
    res.send("<h1>Wohooo i am inside a Middleware,  </h1>");
});

// const server = http.createServer(app);

// server.listen(3000); 
app.listen(3000);