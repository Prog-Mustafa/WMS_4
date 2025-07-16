'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InventoryBalances', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      itemId: { type: Sequelize.INTEGER, references: { model: 'Items', key: 'id' } },
      locationId: { type: Sequelize.INTEGER, references: { model: 'Locations', key: 'id' } },
      quantity: { type: Sequelize.FLOAT, defaultValue: 0 },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('InventoryBalances');
  }
};
