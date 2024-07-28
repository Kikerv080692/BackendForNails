const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const auth = require('../middlewares/auth')
const getAll = require('../controlers/schema/getAll')
const addVariant = require('../controlers/schema/addVarint')

const scheduleRoute = express.Router()
scheduleRoute.get('/',auth, controlWrapper(getAll))
scheduleRoute.post('/',auth, controlWrapper(addVariant) )

module.exports = scheduleRoute