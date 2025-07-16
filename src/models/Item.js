module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    code: { type: DataTypes.STRING, unique: true },
    name: DataTypes.STRING,
    uom: DataTypes.STRING,
  });

  Item.associate = models => {
    Item.hasMany(models.InventoryBalance, { foreignKey: 'itemId' });
  };

  return Item;
};
