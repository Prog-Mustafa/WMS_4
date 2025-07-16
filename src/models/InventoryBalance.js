module.exports = (sequelize, DataTypes) => {
  const InventoryBalance = sequelize.define('InventoryBalance', {
    quantity: { type: DataTypes.FLOAT, defaultValue: 0 },
  });

  InventoryBalance.associate = models => {
    InventoryBalance.belongsTo(models.Item, { foreignKey: 'itemId' });
    InventoryBalance.belongsTo(models.Location, { foreignKey: 'locationId' });
  };

  return InventoryBalance;
};
