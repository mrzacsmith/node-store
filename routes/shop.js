const path = require('path')
const router = require('express').Router()

let currentTime = new Date().toLocaleString()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
})

module.exports = router
