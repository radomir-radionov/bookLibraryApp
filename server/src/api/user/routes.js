import paths from '../../constants/paths.js'
import userHandlers from './handlers.js'
import jwtAuthenticater from '../../middlewares/jwtAuthenticater.js'

const {
  userPaths: {user, userId, updateUserAvatarById, comments, commentId},
  authPaths: {register, auth},
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
    action: userHandlers.getUserById,
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
    action: userHandlers.updateUser,
  },
  {
    path: updateUserAvatarById,
    method: 'put',
    action: userHandlers.updateUserAvatarById,
  },
  {
    path: commentId,
    method: 'put',
    action: userHandlers.updateComment,
  },
  {
    path: commentId,
    method: 'put',
    action: userHandlers.updateComment,
  },
]

export default routes
