module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    quantity: DataTypes.FLOAT,
  });

  Transfer.associate = models => {
    Transfer.belongsTo(models.Location, { as: 'fromLocation', foreignKey: 'fromLocationId' });
    Transfer.belongsTo(models.Location, { as: 'toLocation', foreignKey: 'toLocationId' });
    Transfer.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return Transfer;
};
