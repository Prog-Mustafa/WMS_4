module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = models => {
    User.hasMany(models.AuditLog, { foreignKey: 'userId' });
  };

  return User;
};
