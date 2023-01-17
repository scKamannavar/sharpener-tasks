
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/addproduct',(req, res, next)=>{
    console.log('Second middleware');
    res.send('<form action="product" method="POST"><label>Product name</label><input type="text" name="prodName"><label>Product Size</label><input type="text" name="prodSize"></input><button type="submit">Add product</button></form>');
});

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');

});

app.use('/',(req, res, next)=>{
    console.log('Last middleware');
    res.send("<h1>Wohooo... i am inside a Middleware....  </h1>");
});

app.listen(3000);
