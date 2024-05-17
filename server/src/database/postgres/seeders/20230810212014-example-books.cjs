const tableNames = require('../../../constants/tableNames.cjs')
const mockData = require('../../../mock/books.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.books, mockData, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.books, null, {})
  },
}
