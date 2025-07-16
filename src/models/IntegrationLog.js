module.exports = (sequelize, DataTypes) => {
  const IntegrationLog = sequelize.define('IntegrationLog', {
    status: DataTypes.STRING,
    message: DataTypes.STRING,
  });

  IntegrationLog.associate = models => {
    IntegrationLog.belongsTo(models.IntegrationQueue, { foreignKey: 'queueId' });
  };

  return IntegrationLog;
};
