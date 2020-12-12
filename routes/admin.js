const path = require('path')
const router = require('express').Router()
const adminController = require('../controllers/admin.js')

router.get('/add-product', adminController.getAddProductPage)

router.get('/products', adminController.getProducts)

router.get('/edit-product/:id', adminController.getEditProductPage)

router.post('/product', adminController.postAddProduct)

module.exports = router
