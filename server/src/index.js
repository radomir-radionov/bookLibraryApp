import path from 'path';
import http from 'http';
import Koa from 'koa';
import json from 'koa-json';
import cors from '@koa/cors';
import session from 'koa-session';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { koaBody } from 'koa-body';
import serve from 'koa-static';
import helmet from 'koa-helmet';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import Redis from 'ioredis';
import redisStore from 'koa-redis';
// import redisClient from './database/redis/index.js';
import AppRoutes from './routes.js';
import sessionConfig from './config/sessionConfig.js';
import db from './database/postgres/instance/index.js';
import errorHandler from './middlewares/errorHandler.js';
// import redisClient from 'database/redis/index.js';

dotenv.config();

const app = new Koa();
const router = new Router();
const { sequelize } = db;
const port = +process.env.APP_PORT || 8080;

app.keys = [process.env.SESSION_KEY];

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(serve(path.join(__dirname, '../public/images/covers')));

const redisOptions = {
  host: 'localhost',
  port: 6379,
};

app
  .use(helmet())
  .use(errorHandler)
  .use(cors({ credentials: true }))
  .use(bodyParser())
  .use(json());
// .use(
//   session(
//     {
//       store: redisStore({ client: redisClient }),
//       maxAge: 86400000, // 1 day
//     },
//     app
//   )
// );

const server = http.createServer(app.callback()); // Create an HTTP server using Koa's callback function
// const io = new Server(server, {
//   cors: { origin: 'http://localhost:3000', credentials: true },
// });

// io.use(wrap(sessionMiddleware));
// io.on('connect', (socket) => {
//   console.log(socket.request);
// });

AppRoutes.forEach((route) => router[route.method](route.path, route.action));
app.use(router.routes()).use(router.allowedMethods());

const main = async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({ force: process.env.NODE_ENV === 'development' });
    console.log(`DB started on port ${process.env.HOST_DB_PORT}`);
    app.listen(port, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Server started on port ${port}`);
      }
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

main();
