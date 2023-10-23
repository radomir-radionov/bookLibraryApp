import Koa from 'koa'
import json from 'koa-json'
import cors from '@koa/cors'
import session from 'koa-session'
import passport from 'koa-passport'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import {koaBody} from 'koa-body'
import serve from 'koa-static'
import path from 'path'
import dotenv from 'dotenv'
import AppRoutes from './routes.js'
import db from './database/postgres/instance/index.js'
import errorHandler from './middlewares/errorHandler.js'

dotenv.config()

const app = new Koa()
const router = new Router()
const {sequelize} = db
const port = +process.env.APP_PORT || 3000

app.keys = [process.env.SESSION_KEY]

const __dirname = path.dirname(new URL(import.meta.url).pathname)
app.use(serve(path.join(__dirname, '../public/images/covers')))

app.use(errorHandler).use(cors()).use(bodyParser()).use(json()).use(session({}, app))
// .use(passport.initialize()).use(passport.session())

AppRoutes.forEach((route) => router[route.method](route.path, route.action))

app.use(router.routes()).use(router.allowedMethods())

async function main() {
  try {
    await sequelize.sync()
    // await sequelize.sync({force: process.env.NODE_ENV === 'development'})
    console.log(`DB started on port ${process.env.HOST_DB_PORT}`)
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
