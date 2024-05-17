import paths from '../../constants/paths.js';
import authHandlers from './handlers.js';

const {
  authPaths: { registration, login, logout, refresh },
} = paths;

const routes = [
  {
    path: registration,
    method: 'post',
    action: authHandlers.registration,
  },
  {
    path: login,
    method: 'post',
    action: authHandlers.login,
  },
  {
    path: logout,
    method: 'post',
    action: authHandlers.logout,
  },
  {
    path: refresh,
    method: 'get',
    action: authHandlers.refresh,
  },
];

export default routes;
