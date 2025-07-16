const { Delivery, AuditLog } = require('../../models');
exports.create = async (req, res) => {
  const data = await Delivery.create({ ...req.body });
  await AuditLog.create({ userId: req.user.id, action: 'DELIVERY', details: JSON.stringify(data) });
  res.json(data);
};
