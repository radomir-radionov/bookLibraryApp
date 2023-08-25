import paths from '../constants/paths.js'
import authHandlers from './handlers.js'

const {
  authPaths: {register, auth, forgotPassword, resetPassword},
} = paths

const routes = [
  {
    path: register,
    method: 'post',
    action: authHandlers.createUser,
  },

  //   {
  //     path: forgotPassword,
  //     method: 'post',
  // action: userHandlers.getUserById,
  //   },
  //   {
  //     path: resetPassword,
  //     method: 'post',
  // action: userHandlers.getUserById,
  //   },
]

export default routes
