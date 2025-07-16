const { SalesOrder } = require('../../models');
exports.list = async (req, res) => {
  const sos = await SalesOrder.findAll();
  res.json(sos);
};
