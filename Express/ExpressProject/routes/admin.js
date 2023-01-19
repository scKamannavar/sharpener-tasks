const express = require('express');
const path = require('path');

const router = express.Router();

const rootdir = require('../util/path');

router.get('/addproduct',(req, res, next)=>{
    res.sendFile(path.join(rootdir,'views', 'add-product.html'));
});

router.post('/display',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/shop');
});



module.exports = router;