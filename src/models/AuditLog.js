module.exports = (sequelize, DataTypes) => {
  const AuditLog = sequelize.define('AuditLog', {
    action: DataTypes.STRING,
    details: DataTypes.TEXT,
  });

  AuditLog.associate = models => {
    AuditLog.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return AuditLog;
};
