const path = require('path')
const router = require('express').Router()
const shopController = require('../controllers/shop.js')

let currentTime = new Date().toLocaleString()

router.get('/', shopController.getIndexPage)

router.get('/products', shopController.getProducts)

router.get('/products/:id', shopController.getProductById)

router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)

module.exports = router
