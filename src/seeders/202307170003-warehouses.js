'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Warehouses', [
      { code: 'WH1', name: 'Main Warehouse', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Warehouses', null, {});
  }
};
