'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Receivings', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      purchaseOrderId: { type: Sequelize.INTEGER, references: { model: 'PurchaseOrders', key: 'id' } },
      receivedBy: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Receivings');
  }
};
