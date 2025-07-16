'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CycleCounts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      locationId: { type: Sequelize.INTEGER, references: { model: 'Locations', key: 'id' } },
      itemId: { type: Sequelize.INTEGER, references: { model: 'Items', key: 'id' } },
      countedQty: Sequelize.FLOAT,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('CycleCounts');
  }
};
