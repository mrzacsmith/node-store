const path = require('path')
const router = require('express').Router()
const productsController = require('../controllers/products.js')

router.get('/add-product', productsController.getAddProductPage)

router.post('/product', productsController.postAddProduct)

module.exports = router
