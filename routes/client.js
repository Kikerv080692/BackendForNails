const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const bookNewClient = require('../controlers/client/bookNewClient')
const getClientInfo = require('../controlers/client/getClientInfo')
const getBookSchedule = require('../controlers/client/getBookSchedule')
const auth = require('../middlewares/auth')

const clientRouter = express.Router()
clientRouter.post('/', controlWrapper(bookNewClient))
clientRouter.get('/', controlWrapper(getClientInfo))
clientRouter.get('/booked', controlWrapper(getBookSchedule))
module.exports = clientRouter