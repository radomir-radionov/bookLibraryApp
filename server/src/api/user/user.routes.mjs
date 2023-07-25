import userHandlers from './user.handlers.mjs'

const routes = [
  {
    path: '/test',
    method: 'get',
    action: userHandlers.test,
  },
]

export default routes
