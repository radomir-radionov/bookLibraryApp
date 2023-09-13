import paths from '../../constants/paths.js'
import userHandlers from './handlers.js'
import jwtAuthenticater from '../../middlewares/jwtAuthenticater.js'

const {
  userPaths: {user, userId, updateUserAvatarById, comments, commentId},
  authPaths: {register, auth, forgotPassword, resetPassword},
} = paths

const routes = [
  {
    path: user,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.getUsers(ctx, next)
      })
    },
  },
  {
    path: userId,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.getUserById(ctx, next)
      })
    },
  },
  {
    path: register,
    method: 'post',
    action: userHandlers.createUser,
  },
  {
    path: auth,
    method: 'post',
    action: userHandlers.authenticateUser,
  },
  {
    path: comments,
    method: 'post',
    action: userHandlers.createComment,
  },
  {
    path: userId,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.updateUser(ctx, next)
      })
    },
  },
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
  {
    path: updateUserAvatarById,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.updateUserAvatarById(ctx, next)
      })
    },
  },
  {
    path: commentId,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await userHandlers.updateComment(ctx, next)
      })
    },
  },
]

export default routes
