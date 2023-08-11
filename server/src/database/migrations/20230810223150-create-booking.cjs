const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.booking, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      dateOrder: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      customerFirstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      customerLastName: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable(tableNames.booking)
  },
}
