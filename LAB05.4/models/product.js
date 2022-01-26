const fs = require('fs');
const path = require('path');
const Cart = require('./cart')
const db = require('../util/database')
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id,
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {

  }
  static deleteById(id) {

  }
  static fetchAll(cb) {
    return db.execute('select * from products')
  }

  static findById(id, cb) {

  }
};
