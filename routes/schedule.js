const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const auth = require('../middlewares/auth')
const getByDate = require('../controlers/schema/getByDate')
const addVariant = require('../controlers/schema/addVarint')

const scheduleRoute = express.Router()
scheduleRoute.get('/',auth, controlWrapper(getByDate))
scheduleRoute.post('/',auth, controlWrapper(addVariant) )

module.exports = scheduleRoute