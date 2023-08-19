const tableNames = require('../../constants/tableNames.cjs')
const columnName = 'testField'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableNames.users, columnName, {type: Sequelize.STRING})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(tableNames.users, columnName)
  },
}
