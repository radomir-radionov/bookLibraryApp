const tableNames = require('../../constants/tableNames.cjs')
const mockData = require('../../mock/comments.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(tableNames.comments, mockData, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableNames.comments, null, {})
  },
}
