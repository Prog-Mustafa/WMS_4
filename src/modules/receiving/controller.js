const { Receiving, PurchaseOrder, AuditLog } = require('../../models');
exports.create = async (req, res) => {
  const data = await Receiving.create({ ...req.body });
  await AuditLog.create({ userId: req.user.id, action: 'RECEIVE', details: JSON.stringify(data) });
  res.json(data);
};
