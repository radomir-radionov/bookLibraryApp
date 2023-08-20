const tableNames = require('../../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.users, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      provider: {
        type: Sequelize.STRING,
        defaultValue: 'local',
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable(tableNames)
  },
}
