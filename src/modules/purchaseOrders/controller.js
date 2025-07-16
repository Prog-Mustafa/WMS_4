const { PurchaseOrder } = require('../../models');
exports.list = async (req, res) => {
  const pos = await PurchaseOrder.findAll();
  res.json(pos);
};
