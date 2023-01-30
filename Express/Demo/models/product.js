const products = [];
const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path');
const p = path.join(rootdir,"data","products.json");


const getproductsfromfile = (cb)=>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([]);
        }else{
        cb(JSON.parse(fileContent));
    }
    });
}

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        getproductsfromfile(productsArr => {
            productsArr.push(this);
            fs.writeFile(p, JSON.stringify(productsArr), (err)=>{
                console.log(err);
            });
        });

    }

    static fetchAll(cb){
        getproductsfromfile(cb);
    }
}