const path = require('path')
const express = require('express')
const rootDir = require('../ulti/path')

const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res, next)=> {
    console.log('shop.js: ', adminData.products)
    const products = adminData.products
    res.render('shop', {prods: products, doctitle: 'shop', path: '/'})
})

module.exports = router;