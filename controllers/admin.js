const Product = require('../models/product.js')

exports.getAddProductPage = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  })
}

exports.getProducts = (req, res) => {
  console.log('header', req.headers)

  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      prods: products,
      path: '/admin/products',
    })
  })
}

exports.postAddProduct = (req, res) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price)
  product.save()
  res.redirect('/')
}
