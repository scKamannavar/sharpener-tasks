const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log('Last middleware');
    res.send("<h1>Wohooo... i am inside a Middleware and route folder..  </h1>");
});

module.exports = router;