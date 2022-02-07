const getDb = require('mongodb').getDb

const mongoConnect = require('../util/database')

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title,
    this.price = price,
    this.description = description,
    this.imageUrl = imageUrl
  }

  save () {
    const db = getDb();
    db.Collection('products')
      .insertOne(this)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}


module.exports = Product;