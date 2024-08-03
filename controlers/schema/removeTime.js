const Schedule = require('../../models/schedule')


const removeTime = async (req, res) => {
    const {id} = req.params
    const {_id} = req.user
    const timeToDelete = await Schedule.findOneAndDelete({
        _id: id, 
        owner: _id,
    })
    res.status(200).json({message: 'successes', data: timeToDelete })
}

module.exports = removeTime