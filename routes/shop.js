const path = require('path')
const router = require('express').Router()
const adminData = require('./admin.js')

let currentTime = new Date().toLocaleString()

router.get('/', (req, res) => {
  const products = adminData.products

  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  })
})

module.exports = router
