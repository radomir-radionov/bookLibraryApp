const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const sequelize = require('../instance')
const basename = path.basename(__filename)
const db = {}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.includes('.') &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
