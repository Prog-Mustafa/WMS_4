module.exports = (sequelize, DataTypes) => {
  const CycleCount = sequelize.define('CycleCount', {
    countedQty: DataTypes.FLOAT,
  });

  CycleCount.associate = models => {
    CycleCount.belongsTo(models.Location, { foreignKey: 'locationId' });
    CycleCount.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return CycleCount;
};
