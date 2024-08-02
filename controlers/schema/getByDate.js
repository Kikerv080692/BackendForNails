const Schedule = require('../../models/schedule')

const getByDate = async (req, res) => {
    const {_id} = req.user
    const {days, month} = req.query
    let query = {owner: _id}
    if(days){
        query.days = days
    }
    if(month){
        query.month = month
    }
    
    const allVariant = await Schedule.find(query, '-createdAt -updatedAt')
    res.status(200).json({message: 'successes',
        data: allVariant
    })
}

module.exports = getByDate