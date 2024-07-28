const express = require('express')
const controlWrapper = require('../middlewares/controlWrapper')
const auth = require('../middlewares/auth')
const register = require('../controlers/register')
const login = require('../controlers/login')
const logout = require('../controlers/logout')
const refreshing = require('../controlers/refreshing')
const router = express.Router()

router.post('/register', controlWrapper(register))
router.post('/login', controlWrapper(login))
router.post('/logout',auth, controlWrapper(logout)) 
router.get('/current', auth, controlWrapper(refreshing))


module.exports = router