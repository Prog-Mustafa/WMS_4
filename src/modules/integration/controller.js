const { IntegrationLog } = require('../../models');
exports.list = async (req, res) => {
  const logs = await IntegrationLog.findAll();
  res.json(logs);
};
