const path = require('path');

const express = require('express');

const rootDir = require('../ulti/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'view', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(products)
  products.push({title: req.body.title})
  console.log(products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;