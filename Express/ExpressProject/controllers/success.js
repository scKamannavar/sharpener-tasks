const path = require('path');

exports.successMsg = (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname ,'..', 'views', 'success.html'));

}