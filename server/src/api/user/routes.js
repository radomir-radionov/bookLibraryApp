import { koaBody } from 'koa-body';
import paths from '../../constants/paths.js';
import userHandlers from './handlers.js';
import jwtAuthenticater from '../../middlewares/jwtAuthenticater.js';

const {
  userPaths: { user, userId, userAvatarById, comments, commentId },
  authPaths: { forgotPassword, resetPassword },
} = paths;

const routes = [
  {
    path: user,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.getUsers(ctx, next);
      });
    },
  },
  {
    path: userId,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.getUserById(ctx, next);
      });
    },
  },
  {
    path: userId,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.updateUser(ctx, next);
      });
    },
  },

  // password
  {
    path: forgotPassword,
    method: 'post',
    action: userHandlers.forgotPassword,
  },
  {
    path: resetPassword,
    method: 'post',
    action: userHandlers.resetPassword,
  },

  // avatar
  {
    path: userAvatarById,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.getUserAvatar(ctx, next);
      });
    },
  },
  {
    path: userAvatarById,
    method: 'post',
    action: async function combinedMiddleware(ctx, next) {
      await koaBody({ multipart: true })(ctx, async () => {
        await userHandlers.updateUserAvatarById(ctx, next);
      });
    },
  },

  // comments
  {
    path: comments,
    method: 'post',
    action: userHandlers.createComment,
  },
  {
    path: commentId,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.updateComment(ctx, next);
      });
    },
  },
];

export default routes;
