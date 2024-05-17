import path from 'path';
import { createServer } from 'http';
import Koa from 'koa';
import json from 'koa-json';
import cors from '@koa/cors';
import session from 'koa-session';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import helmet from 'koa-helmet';
import dotenv from 'dotenv';
import AppRoutes from './routes.js';
import db from './database/postgres/instance/index.js';
import errorHandler from './middlewares/errorHandler.js';
import koaSession from './config/koaSession.js';
import { handleConnection } from './api/chat/index.js';
import { Server } from 'socket.io';

dotenv.config();

const app = new Koa();
const router = new Router();
const { sequelize } = db;
const port = +process.env.APP_PORT || 8080;

app.keys = [process.env.SESSION_KEY];

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(serve(path.join(__dirname, '../public/images/covers')));

app
  .use(helmet())
  .use(errorHandler)
  .use(cors({ credentials: true }))
  .use(bodyParser())
  .use(json())
  .use(session(koaSession, app));

const httpServer = createServer(app.callback());

export const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000' },
});
io.on('connection', (socket) => handleConnection(socket));

AppRoutes.forEach(({ method, path, action }) => router[method](path, action));
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

    httpServer.listen(process.env.WEBSOCKET_PORT, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          `Socket Server started on port ${process.env.WEBSOCKET_PORT}`
        );
      }
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

main();

// app.use(async (ctx) => {
//   ctx.body = 'Hello from KoaJS';
// });
