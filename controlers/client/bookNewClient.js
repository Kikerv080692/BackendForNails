const Client = require('../../models/client');

const bookNewClient = async (req, res) => {
  const { body } = req;
  const addClient = await Client.create({ ...body });
  res.status(201).json({ message: 'successes', data: addClient });
};

module.exports = bookNewClient