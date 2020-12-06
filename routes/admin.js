const path = require('path')
const router = require('express').Router()

const products = []

router.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  })
})

router.post('/product', (req, res) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

exports.routes = router
exports.products = products
