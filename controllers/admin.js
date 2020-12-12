const Product = require('../models/product.js')

exports.getAddProductPage = (req, res) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
    editing: false,
  })
}

exports.getProducts = (req, res) => {
  console.log('header', req.headers)

  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin Product',
      prods: products,
      path: '/admin/products',
    })
  })
}

exports.getEditProductPage = (req, res) => {
  const editMode = req.query.edit
  if (!editMode) res.redirect('/')

  const prodId = req.params.id
  Product.findById(prodId, (product) => {
    if (!product) res.redirect('/')
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product,
    })
  })
}

exports.postAddProduct = (req, res) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(null, title, imageUrl, description, price)
  product.save()
  res.redirect('/')
}

exports.postEditProduct = (req, res) => {
  const prodId = req.body.productId
  const updatedTitle = req.body.title
  const updatedImageUrl = req.body.imageUrl
  const updatedPrice = req.body.price
  const updatedDescription = req.body.description
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDescription
  )
  updatedProduct.save()
}
