import redisClient from '../database/redis/index.js';
import redisStore from 'koa-redis';

const koaSession = {
  store: redisStore({ client: redisClient }),
  maxAge: 86400000,
};

export default koaSession;
