'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Deliveries', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      salesOrderId: { type: Sequelize.INTEGER, references: { model: 'SalesOrders', key: 'id' } },
      deliveredBy: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Deliveries');
  }
};
