const { Transfer, AuditLog } = require('../../models');
exports.create = async (req, res) => {
  const data = await Transfer.create({ ...req.body });
  await AuditLog.create({ userId: req.user.id, action: 'TRANSFER', details: JSON.stringify(data) });
  res.json(data);
};
