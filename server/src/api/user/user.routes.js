import userHandlers from './user.handlers.js'

const routes = [
  {
    path: '/user',
    method: 'post',
    action: userHandlers.createUser,
  },
  {
    path: '/user',
    method: 'get',
    action: userHandlers.getUsers,
  },
  {
    path: '/user/:id',
    method: 'get',
    action: userHandlers.getUserById,
  },
]

export default routes
