module.exports = (sequelize, DataTypes) => {
  const PurchaseOrder = sequelize.define('PurchaseOrder', {
    number: { type: DataTypes.STRING, unique: true },
    supplier: DataTypes.STRING,
  });

  PurchaseOrder.associate = models => {
    PurchaseOrder.hasMany(models.Receiving, { foreignKey: 'purchaseOrderId' });
  };

  return PurchaseOrder;
};
