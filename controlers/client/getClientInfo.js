const Client = require('../../models/client');

const getClientInfo = async (req, res) => {
    const {days, month, hours, minutes} = req.query
    let query = {}

    if(days){
        query.days = days
    }
    if(month){
        query.month = month
    }
    if(hours){
        query.hours = hours
    }
    if(minutes){
        query.minutes = minutes
    }
    const clientInfo = await Client.find(query, '-createdAt -updatedAt')
    res.status(200).json({message: 'successes',
        data: clientInfo
    })
}

module.exports = getClientInfo