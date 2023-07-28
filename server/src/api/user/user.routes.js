import userHandlers from './user.handlers.js'

const routes = [
  {
    path: '/test',
    method: 'get',
    action: userHandlers.test,
  },
]

export default routes
