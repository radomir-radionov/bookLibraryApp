const tableNames = require('../../../constants/tableNames.cjs')
const mockData = require('../../../mock/delivery.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.deliveries, [mockData], {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.deliveries, null, {})
  },
}
