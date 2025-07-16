module.exports = (sequelize, DataTypes) => {
  const IntegrationQueue = sequelize.define('IntegrationQueue', {
    type: DataTypes.STRING,
    payload: DataTypes.JSON,
    status: DataTypes.STRING,
  });

  IntegrationQueue.associate = models => {
    IntegrationQueue.hasMany(models.IntegrationLog, { foreignKey: 'queueId' });
  };

  return IntegrationQueue;
};
