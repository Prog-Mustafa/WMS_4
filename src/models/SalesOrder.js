module.exports = (sequelize, DataTypes) => {
  const SalesOrder = sequelize.define('SalesOrder', {
    number: { type: DataTypes.STRING, unique: true },
    customer: DataTypes.STRING,
  });

  SalesOrder.associate = models => {
    SalesOrder.hasMany(models.Delivery, { foreignKey: 'salesOrderId' });
  };

  return SalesOrder;
};
