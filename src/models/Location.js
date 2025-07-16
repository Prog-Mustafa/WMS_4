module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    code: { type: DataTypes.STRING, unique: true },
    name: DataTypes.STRING,
  });

  Location.associate = models => {
    Location.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' });
    Location.hasMany(models.InventoryBalance, { foreignKey: 'locationId' });
  };

  return Location;
};
