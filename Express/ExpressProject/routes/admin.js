const express = require('express');

const router = express.Router();

router.get('/addproduct',(req, res, next)=>{
    console.log('Second middleware');
    res.send('<form action="display" method="POST"><label>Product name</label><input type="text" name="prodName"><label>Product Size</label><input type="text" name="prodSize"></input><button type="submit">Add product</button></form>');
});

router.post('/display',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/shop');
});



module.exports = router;