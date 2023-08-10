import dotenv from 'dotenv'

dotenv.config()

export default {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_NAME,
    host: process.env.HOST_MACHINE_DB_HOST,
    port: process.env.HOST_DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_NAME,
    host: process.env.HOST_MACHINE_DB_HOST,
    port: process.env.HOST_DB_PORT,
    dialect: 'postgres',
  },
}
