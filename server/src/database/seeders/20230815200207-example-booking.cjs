const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/booking.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableNames.booking, [mockData], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableNames.booking, null, {})
  },
}
