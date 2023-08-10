import tableNames from '../../constants/tableNames.js'
const columnName = 'testField'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableNames.users, columnName, {type: Sequelize.STRING})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(tableNames.users, columnName)
  },
}
