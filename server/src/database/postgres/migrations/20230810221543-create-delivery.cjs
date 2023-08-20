const tableNames = require('../../../constants/tableNames.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.deliveries, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable(tableNames.deliveries)
  },
}
