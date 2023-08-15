const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/categories.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableNames.categories, mockData, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableNames.categories, null, {})
  },
}
