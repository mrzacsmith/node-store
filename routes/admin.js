const router = require('express').Router()

router.get('/add-product', (req, res) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">app product</button></form>'
  )
})

router.post('/product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router