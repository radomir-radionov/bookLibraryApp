const tableNames = require('../../../constants/tableNames.cjs')
const mockData = require('../../../mock/extendedBooks.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.extendedBooks, mockData, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.extendedBooks, null, {})
  },
}
