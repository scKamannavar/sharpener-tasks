
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// const rootdir = require('util/path');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use('/shop', shopRoutes);

app.get('/contactus',(req, res, next)=>{
    res.sendFile(path.join(__dirname ,'views', 'contactus.html'));
});

app.post('/success',(req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname ,'views', 'success.html'));

});

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);
