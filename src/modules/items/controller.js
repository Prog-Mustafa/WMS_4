const { Item } = require('../../models');
exports.list = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};
