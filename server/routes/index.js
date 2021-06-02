const express = require('express')
const router = express.Router()

const inventoryRoute = require('./api/inventory')

let apiRouter = router
  .use('/inventory', inventoryRoute)
  //.use('./orders', orderRoute)

module.exports= apiRouter 