'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    const hash = await bcrypt.hash('admin123', 10);
    await queryInterface.bulkInsert('Users', [{ username: 'admin', password: hash, role: 'admin', createdAt: new Date(), updatedAt: new Date() }]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', { username: 'admin' });
  }
};
