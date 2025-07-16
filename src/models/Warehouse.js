module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    code: { type: DataTypes.STRING, unique: true },
    name: DataTypes.STRING,
  });

  Warehouse.associate = models => {
    Warehouse.hasMany(models.Location, { foreignKey: 'warehouseId' });
  };

  return Warehouse;
};
