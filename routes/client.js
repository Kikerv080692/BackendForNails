const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const bookNewClient = require('../controlers/client/bookNewClient')
const getClientInfo = require('../controlers/client/getClientInfo')

const clientRouter = express.Router()
clientRouter.post('/', controlWrapper(bookNewClient))
clientRouter.get('/', controlWrapper(getClientInfo))

module.exports = clientRouter