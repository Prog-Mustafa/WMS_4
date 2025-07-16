module.exports = (sequelize, DataTypes) => {
  const Receiving = sequelize.define('Receiving', {
    receivedBy: DataTypes.STRING,
  });

  Receiving.associate = models => {
    Receiving.belongsTo(models.PurchaseOrder, { foreignKey: 'purchaseOrderId' });
  };

  return Receiving;
};
