const Product = require('../models/product.js')

exports.getIndexPage = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      pageTitle: 'Shop',
      prods: products,
      path: '/',
    })
  })
}

exports.getProducts = (req, res) => {
  // req.headers['Content-Security-Policy'] =
  //   "img-src https://res.cloudinary.com/* 'self';"
  console.log('header', req.headers)
  Product.fetchAll((products) => {
    res.render('shop/index', {
      pageTitle: 'Products',
      prods: products,
      path: '/products',
    })
  })
}

//res.cloudinary.com/devsec/image/upload/v1607304780/beard1_psuw0p.jpg

https: exports.getCart = (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Shopping Cart',
    path: '/cart',
  })
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  })
}

exports.getOrders = (req, res) => {
  res.render('shop/orders', {
    pageTitle: 'Orders',
    path: '/orders',
  })
}
