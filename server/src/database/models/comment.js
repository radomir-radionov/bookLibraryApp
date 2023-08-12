import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
      rating: DataTypes.INTEGER,
      text: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      commentUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  )
  return Comment
}
