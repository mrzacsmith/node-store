const path = require('path')
const router = require('express').Router()
const productsController = require('../controllers/products.js')

let currentTime = new Date().toLocaleString()

router.get('/', productsController.getProducts)

module.exports = router
