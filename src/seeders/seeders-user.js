'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Mike',
      lastName: 'Son',
      email: 'example@example.com',
      password: 'admin',
      address: 'Ha Noi',
      gender: 1,
      roleid: 'R2',
      phonenumber: '0976234432',
      image: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
