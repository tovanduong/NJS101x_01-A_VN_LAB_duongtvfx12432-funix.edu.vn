const fs = require('fs')
const path = require('path')

module.exports = class Product {
    constructor(t) {
        this.title = t;
        console.log(this)
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')
        fs.readFile(p, (error, fileContent) => {
            let product = [];
            if(!error) {
                product = JSON.parse(fileContent);

            }
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), (err) => {
                console.log(err)
            })
        })
    }
    static fetchAll(cb) {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
        // return products
    }
}