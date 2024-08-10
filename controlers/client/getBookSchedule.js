const Client = require('../../models/client');

const getBookSchedule = async (req, res) => {
    const {days, month } = req.query
    let query = {}

    if(days){
        // const dayArray = days.split(',')
        // query.days = {$in: dayArray}
        query.days = days
    }
    if(month){
        // const monthArray = month.split(',')
        // query.month =  {$in: monthArray}
        query.month = month
    }
   

    const bookedScheduleInfo = await Client.find(query, '-createdAt -updatedAt')
    res.status(200).json({message: 'successes',
        data: bookedScheduleInfo
    })
  };

  module.exports = getBookSchedule