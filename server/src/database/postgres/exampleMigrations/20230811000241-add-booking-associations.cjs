const tableNames = require('../../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableNames.booking, 'customerId', {
      type: Sequelize.INTEGER,
      references: {
        model: tableNames.users,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(tableNames.booking, 'customerId')
  },
}
