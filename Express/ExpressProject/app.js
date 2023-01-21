
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const contactusFormRouter = require('./controllers/form');
const successMsgRouter = require('./controllers/success')

// const rootdir = require('util/path');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use('/shop', shopRoutes);

app.get('/contactus',contactusFormRouter.getContactusForm);

app.post('/success',successMsgRouter.successMsg);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);
