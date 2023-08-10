const tableName = 'Users'
const columnName = 'testField'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableName, columnName, {type: Sequelize.STRING})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(tableName, columnName)
  },
}
