const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const auth = require('../middlewares/auth')
const getByDate = require('../controlers/schema/getByDate')
const addVariant = require('../controlers/schema/addVarint')
const removeTime = require('../controlers/schema/removeTime')



const scheduleRoute = express.Router()
scheduleRoute.get('/', controlWrapper(getByDate))
scheduleRoute.post('/', auth, controlWrapper(addVariant) )
scheduleRoute.delete('/:id', auth, controlWrapper(removeTime) )

module.exports = scheduleRoute