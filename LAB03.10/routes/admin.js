const path = require('path');

const express = require('express');

const rootDir = require('../ulti/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', activeProduct: true, formCSS: true, productCSS: true})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(products)
  products.push({title: req.body.title})
  res.redirect('/');
});

exports.routes = router;
exports.products = products;