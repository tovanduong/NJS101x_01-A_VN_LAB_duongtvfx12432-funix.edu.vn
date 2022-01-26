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

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent)=>{
            if(err) {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.findIndex(prod => prod.id === id);
            const productQty = product.qty
            updatedCart.product = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty
            fs.writeFile(p, JSON.stringify(updatedCart), (err)=>{
                console.log(err)
            })
        })    
    }
    
    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
          const cart = JSON.parse(fileContent);
          if (err) {
            cb(null);
          } else {
            cb(cart);
          }
        });
      }
}
