import serverEndpoints from 'constants/apiEndpoints.js';
import httpService from 'http/index.js';
import { TPostBookingReq, TPutBookingReq } from './types.js';

const bookingReqService = {
  postBooking: async (payload: TPostBookingReq) => {
    const { data } = await httpService.post(serverEndpoints.BOOKINGS, payload);

    return data;
  },
  putBooking: async ({ bookingId, payload }: TPutBookingReq) => {
    const { data } = await httpService.put(`${serverEndpoints.BOOKINGS}/${bookingId}`, payload);

    return data;
  },
  deleteBooking: async (id: number) => {
    const { data } = await httpService.delete(`${serverEndpoints.BOOKINGS}/${id}`);

    return data;
  },
  deleteExpiredBooking: async (id: number) => {
    const { data } = await httpService.delete(`${serverEndpoints.BOOKINGS}/expired/${id}`);

    return data;
  },
};

export default bookingReqService;
