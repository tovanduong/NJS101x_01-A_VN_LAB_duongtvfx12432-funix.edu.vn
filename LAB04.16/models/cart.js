const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);


module.exports = class cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent)=>{
            let cart = { products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent)
            }
            const exitstingProductIndex = cart.products.find(prod => prod.id === id);
            const exitstingProduct = cart.products[exitstingProductIndex]
            let updateProduct;
            if(exitstingProduct) {
                updateProduct = {...exitstingProduct}
                updateProduct.qty = updateProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[exitstingProductIndex] = updateProduct
            } else {
                updateProduct = { id: id, qty: 1}
                cart.products = [...cart.products, updateProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err)
            })
        })
    }
}