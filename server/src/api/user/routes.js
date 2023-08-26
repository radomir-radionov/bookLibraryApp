import paths from '../../constants/paths.js'
import userHandlers from './handlers.js'
import jwtAuthenticater from '../../middlewares/jwtAuthenticater.js'

const {
  userPaths: {user, userId},
  authPaths: {register, auth},
} = paths

const routes = [
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
]

export default routes
