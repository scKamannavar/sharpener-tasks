const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart{
    // constructor(){
    //     this.products = [];
    //     this.totalprice = 0;
    // }

    static addProduct(id, productPrice){
        fs.readFile(p, (err, fileContent) =>{
            let cart = { products : [], totalPrice : 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductsIndex  = cart.products.findIndex(prod => prod.id == id);
            const existingProducts = cart.products[existingProductsIndex];
            let updatedProduct; 
            if(existingProducts){
                updatedProduct = {...existingProducts};
                updatedProduct.qty = existingProducts.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductsIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id:id, qty:1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err=>{
                console.log(err);
            });
        });
    }
}