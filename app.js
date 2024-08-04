const express = require('express')
const cors = require('cors')
require('dotenv').config()
const authRouter = require('./routes/auth')
const scheduleRoute = require('./routes/schedule')
const clientRouter = require('./routes/client')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/schedule', scheduleRoute)
app.use('/api/book', clientRouter )


app.use((_, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

app.use((error, req, res, next) => {
    const {status = 500, message = 'server error'} = error
    res.status(status).json({message})
})


module.exports = app