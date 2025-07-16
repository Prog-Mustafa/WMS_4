'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PurchaseOrders', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      number: { type: Sequelize.STRING, unique: true },
      supplier: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('PurchaseOrders');
  }
};
