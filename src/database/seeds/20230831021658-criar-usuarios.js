const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Michael',
        email: 'testes@gmail.com',
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Michaell',
        email: 'testes2@gmail.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Michaelll',
        email: 'testes3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ],
    {},
  ),

  down: () => {},
};
