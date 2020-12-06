const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/admin', adminRouter)
server.use(shopRouter)

server.use((req, res) => {
  res.status(404).send('<h2>This is not the page you are looking for!</h2>')
})

const PORT = process.env.PORT || 4555

server.listen(PORT, () => {
  console.log(`\n** Server is running on port ${PORT}`.america)
})
