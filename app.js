const path = require('path')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const errorsController = require('./controllers/errors.js')

server.set('view engine', 'ejs')
server.set('views', 'views')
server.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      // 'img-src': ['*'],
      'img-src': ["'self'", '*.cloudinary.com'],
    },
  })
)
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/admin', adminRouter)
server.use(shopRouter)

server.use(errorsController.get404Page)

const PORT = process.env.PORT || 4555

server.listen(PORT, () => {
  console.log(`\n** Server is running on port ${PORT}`.america)
})

// server.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data")
