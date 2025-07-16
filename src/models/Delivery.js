module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    deliveredBy: DataTypes.STRING,
  });

  Delivery.associate = models => {
    Delivery.belongsTo(models.SalesOrder, { foreignKey: 'salesOrderId' });
  };

  return Delivery;
};
