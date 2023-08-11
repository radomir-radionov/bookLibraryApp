const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.deliveries, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      handed: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      dateHandedFrom: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dateHandedTo: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      recipientFirstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      recipientLastName: {
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
    await queryInterface.dropTable(tableNames.deliveries)
  },
}
