'use strict';
module.exports = {
  up: async (queryInterface) => {
    const [warehouse] = await queryInterface.sequelize.query('SELECT id FROM Warehouses LIMIT 1;');
    const warehouseId = warehouse[0].id;
    await queryInterface.bulkInsert('Locations', [
      { code: 'LOC1', name: 'Default Location', warehouseId, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
