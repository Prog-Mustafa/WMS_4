const { CycleCount, AuditLog } = require('../../models');
exports.create = async (req, res) => {
  const data = await CycleCount.create({ ...req.body });
  await AuditLog.create({ userId: req.user.id, action: 'CYCLE_COUNT', details: JSON.stringify(data) });
  res.json(data);
};
