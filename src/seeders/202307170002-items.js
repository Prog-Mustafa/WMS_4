'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Items', [
      { code: 'ITEM001', name: 'Item One', uom: 'EA', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
