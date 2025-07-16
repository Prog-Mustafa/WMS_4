'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IntegrationQueues', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      type: Sequelize.STRING,
      payload: Sequelize.JSON,
      status: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('IntegrationQueues');
  }
};
