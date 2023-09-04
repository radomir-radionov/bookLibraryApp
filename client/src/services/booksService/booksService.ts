import serverEndpoints from 'constants/apiEndpoints';

import httpService from '../../http';

import { PostBookingProps, PutRebookingProps } from './types';

const booksService = {
  getBooks: async () => {
    const resp = await httpService.get(serverEndpoints.BOOKS);

    return resp.data;
  },
  getCategories: async () => {
    const resp = await httpService.get(serverEndpoints.CATEGORIES);

    return resp.data;
  },
  getBookById: async (id: number) => {
    const { data } = await httpService.get(`${serverEndpoints.BOOKS}/${id}`);
    return data;
  },
  postBooking: async (payload: PostBookingProps) => {
    const resp = await httpService.post(serverEndpoints.BOOKINGS, payload);

    return resp.data;
  },
  putRebooking: async (payload: PutRebookingProps) => {
    const resp = await httpService.put(`${serverEndpoints.BOOKINGS}/${payload.bookingId}`, payload.reqBody);

    return resp.data;
  },
  deleteBooking: async (payload: number) => {
    const resp = await httpService.delete(`${serverEndpoints.BOOKINGS}/${payload}`);

    return resp.data;
  },
};

export default booksService;
