const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

const PORT = process.env.PORT || 4555

server.listen(PORT, () => {
  console.log(`\n** Server is running on port ${PORT}`.america)
})
