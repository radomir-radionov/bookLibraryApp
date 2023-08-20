const tableNames = require('../../../constants/tableNames.cjs')
const mockData = require('../../../mock/booking.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.booking, [mockData], {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.booking, null, {})
  },
}
