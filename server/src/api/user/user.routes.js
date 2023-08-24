import paths from '../../constants/paths.js'
import userHandlers from './user.handlers.js'

const {
  userPaths: {user, userId},
} = paths

const routes = [
  {
    path: user,
    method: 'post',
    action: userHandlers.createUser,
  },
  {
    path: user,
    method: 'get',
    action: userHandlers.getUsers,
  },
  {
    path: userId,
    method: 'get',
    action: userHandlers.getUserById,
  },
]

export default routes
