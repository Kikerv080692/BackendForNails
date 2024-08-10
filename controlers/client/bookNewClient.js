const Client = require('../../models/client');
const Schedule = require('../../models/schedule')

const bookNewClient = async (req, res) => {
  const { body } = req;
  const addClient = await Client.create({ ...body });
  let query = {}
  query.days = body.days
  query.month = body.month
  query.minutes = body.minutes
  query.hours = body.hours
  await Schedule.findOneAndUpdate(query, {booked: true})
  res.status(201).json({ message: 'successes', data: addClient });
};

module.exports = bookNewClient