const { timeStamp } = require('console')
const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
)

const random = (num) => {
  return Math.floor(Math.random() * Math.floor(num))
}

const getProductsFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([])
    }
    cb(JSON.parse(fileContent))
  })
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
  save() {
    this.id = random(10000000)
    getProductsFile((products) => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }
  static fetchAll(cb) {
    getProductsFile(cb)
  }
}
