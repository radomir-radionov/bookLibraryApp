import userHandlers from './user.handlers.js'

const routes = [
  {
    path: '/user',
    method: 'post',
    action: userHandlers.createUser,
  },
]

export default routes
