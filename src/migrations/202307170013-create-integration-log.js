'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IntegrationLogs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      queueId: { type: Sequelize.INTEGER, references: { model: 'IntegrationQueues', key: 'id' } },
      status: Sequelize.STRING,
      message: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('IntegrationLogs');
  }
};
