const Schedule = require('../../models/schedule')

const addVariant = async (req, res) => {
    const {_id} = req.user
    const {body} = req
    // console.log('data', data)
    const addToSchedule = await Schedule.create({...body, owner: _id})
    res.status(201).json({message: 'successes',
        data: addToSchedule
    })
}

module.exports = addVariant