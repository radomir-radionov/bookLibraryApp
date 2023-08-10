const tableName = 'Users'
const columnName = 'testField'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableName, columnName, {type: Sequelize.STRING})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(tableName, columnName)
  },
}
