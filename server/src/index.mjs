import Koa from 'koa'
import cors from '@koa/cors'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'
import AppRoutes from './routes.mjs'
import db from './database/postgres/index.mjs'

dotenv.config()

// create koa app
const app = new Koa()
const router = new Router()
const port = +process.env.APP_PORT || 3000

// register all application routes
AppRoutes.forEach((route) => router[route.method](route.path, route.action))

// Middleware
app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

// Error-handling middleware
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.error('Server error', err)
    ctx.status = err.status || 500
    ctx.body = { error: err.message }
  }
})

async function main() {
  try {
    const { sequelize } = db

    await sequelize.authenticate()
    await sequelize.sync({ force: process.env.NODE_ENV === 'development' })

    app.listen(port, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log(`Server started on port ${port}`)
      }
    })
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

main()
