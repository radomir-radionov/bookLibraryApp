const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/categories.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.categories, mockData, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.categories, null, {})
  },
}
