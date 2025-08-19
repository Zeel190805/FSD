
var express = require('express');
var router = express.Router();

// Show edit product form
router.get('/edit-product/:id', function(req, res, next) {
  const productId = req.params.id;
  ProductModel.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.render('edit-product', { product });
    })
    .catch((err) => {
      console.log(err);
      res.send('Error loading product for edit');
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Show add product form
router.get('/add-product', function(req, res, next) {
  res.render('add-product');
});


// Process add product form
const ProductModel = require('../models/Product');
router.post('/add-product-process', async function(req, res, next) {
  try {
    const mydata = {
      pname: req.body.name,
      pdetail: req.body.description,
      pprice: req.body.price
    };
    const product = new ProductModel(mydata);
    await product.save();
    res.render('add-product-process', { product: {
      name: mydata.pname,
      price: mydata.pprice,
      detail: mydata.pdetail
    }});
  } catch (err) {
    console.log(err);
    res.send('Product not added');
  }
});


// Display all products
router.get('/display-product', function(req, res, next) {
  ProductModel.find()
    .then((products) => {
      res.render('display-product', { products });
    })
    .catch((err) => {
      console.log(err);
      res.send('Error retrieving products');
    });
});


// Delete product (POST)
router.post('/delete-product/:id', function(req, res, next) {
  const productId = req.params.id;
  ProductModel.findByIdAndDelete(productId)
    .then(() => {
      res.redirect('/display-product');
    })
    .catch((err) => {
      console.log(err);
      res.send('Error deleting product');
    });
});


router.post('/edit-product-process', function(req, res, next) {
  const productId = req.body.id;
  const updatedData = {
    pname: req.body.name,
    pdetail: req.body.description,
    pprice: req.body.price
  };
  ProductModel.findByIdAndUpdate(productId, updatedData)
    .then(() => {
      res.redirect('/display-product');
    })
    .catch((err) => {
      console.log(err);
      res.send('Error updating product');
    });
});

module.exports = router;
