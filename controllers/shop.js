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
  console.log('header', req.headers)
  Product.fetchAll((products) => {
    res.render('shop/index', {
      pageTitle: 'Products',
      prods: products,
      path: '/products',
    })
  })
}

exports.getProductById = (req, res) => {
  const prodId = req.params.id
  Product.findById(prodId, (product) => {
    product = product[0]
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products',
    })
  })
}

exports.getCart = (req, res) => {
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
