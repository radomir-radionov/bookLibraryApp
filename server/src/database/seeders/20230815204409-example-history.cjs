const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/history.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableNames.histories, [...mockData], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableNames.histories, null, {})
  },
}
