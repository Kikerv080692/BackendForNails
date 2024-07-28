const Schedule = require('../../models/schedule')

const getAll = async (req, res) => {
    const {_id} = req.user
    const allVariant = await Schedule.find({owner: _id}, '-createdAt -updatedAt')
    res.status(200).json({message: 'successes',
        data: allVariant
    })
}

module.exports = getAll