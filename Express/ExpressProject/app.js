
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>404 - Page not Found</h1>')
});
app.listen(3000);
