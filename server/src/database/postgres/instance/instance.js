import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

dotenv.config()

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.POSTGRES_NAME,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
})

export default sequelize
