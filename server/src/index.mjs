import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'
import AppRoutes from './router/index.mjs'

dotenv.config()

// create koa app
const app = new Koa()
const router = new Router()
const port = +process.env.APP_PORT || 3000

// register all application routes
AppRoutes.forEach((route) => router[route.method](route.path, route.action))

// Middleware

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .on('error', (err) => {
    console.error('Server error', err)
  })

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Server started on port ${port}`)
  }
})
