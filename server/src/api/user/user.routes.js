import userHandlers from './user.handlers.js'

const routes = [
  {
    path: '/test',
    method: 'get',
    action: userHandlers.test,
  },
  {
    path: '/user',
    method: 'post',
    action: userHandlers.createUser,
  },
]

export default routes
