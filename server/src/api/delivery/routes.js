import paths from '../../constants/paths.js'
import bookHandlers from './handlers.js'

const {
  deliveryPaths: {deliveries, deliverieId},
} = paths

const routes = [
  {
    path: deliveries,
    method: 'post',
    action: bookHandlers.createDelivery,
  },
  {
    path: deliverieId,
    method: 'delete',
    action: bookHandlers.deleteDelivery,
  },
]

export default routes
