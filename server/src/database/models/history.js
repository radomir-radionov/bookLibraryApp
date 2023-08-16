import {DataTypes, Model} from 'sequelize'
import tableNames from '../../constants/tableNames.cjs'

export default (sequelize) => {
  class History extends Model {
    static associate(models) {
      //TODO: fix circular dependency
      // History.belongsTo(models.Book, {
      //   foreignKey: 'bookId',
      //   as: 'book',
      // })
      // History.belongsTo(models.User, {
      //   foreignKey: 'userId',
      //   as: 'user',
      // })
    }
  }
  History.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: tableNames.histories,
    }
  )
  return History
}
