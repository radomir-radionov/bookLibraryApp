const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableNames.deliveries, 'recipientId', {
      type: Sequelize.INTEGER,
      references: {
        model: tableNames.users,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })

    await queryInterface.addColumn(tableNames.deliveries, 'bookId', {
      type: Sequelize.INTEGER,
      references: {
        model: tableNames.books,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableNames.deliveries, 'recipientId')
    await queryInterface.removeColumn(tableNames.deliveries, 'bookId')
  },
}
