const tableName = 'Books'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [{name: 'John Doe', isBetaMember: false}], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {})
  },
}
