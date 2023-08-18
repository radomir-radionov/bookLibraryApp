const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/user.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.users, mockData, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.users, null, {})
  },
}
