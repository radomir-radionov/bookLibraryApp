import paths from '../../constants/paths.js';
import historyHandlers from './handlers.js';

const {
  historyPaths: { histories },
} = paths;

const routes = [
  {
    path: histories,
    method: 'get',
    action: historyHandlers.getHistories,
  },
  {
    path: histories,
    method: 'post',
    action: historyHandlers.createHistory,
  },
];

export default routes;
