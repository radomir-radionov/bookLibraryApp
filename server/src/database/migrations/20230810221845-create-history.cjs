const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.histories, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.histories)
  },
}
