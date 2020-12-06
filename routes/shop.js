const router = require('express').Router()

let currentTime = new Date().toLocaleString()

router.get('/', (req, res) => {
  res.send(`<h1>Hello from express! ${currentTime}</h1>`)
})

module.exports = router
