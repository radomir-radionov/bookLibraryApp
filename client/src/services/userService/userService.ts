import serverEndpoints from 'constants/apiEndpoints';
import httpService from '../../http';
import { PostCommentProps, PutCommentProps, TPutUserReq } from './types';

const userService = {
  getUserByid: async (id: number) => {
    const { data } = await httpService.get(`${serverEndpoints.USER}/${id}`);

    return data;
  },
  postComment: async (paylaod: PostCommentProps) => await httpService.post(serverEndpoints.COMMENTS, paylaod),
  putComment: async ({ commentId, ...restPayload }: PutCommentProps) => {
    const { data } = await httpService.put(`${serverEndpoints.COMMENTS}/${commentId}`, restPayload.data);

    return data;
  },
  putUser: async ({ userId, payload }: TPutUserReq) => {
    const { data } = await httpService.put(`${serverEndpoints.USER}/${userId}`, payload);

    return data;
  },
  getUserAvatar: async (userId: number) => {
    const { data } = await httpService.get(`${serverEndpoints.USER}/${userId}/avatar`);

    return data;
  },
  postUserAvatar: async ({ userId, payload }: any) => {
    const {
      data: { data },
    } = await httpService.post(`${serverEndpoints.USER}/${userId}/avatar`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return data;
  },
  deleteBooking: async (payload: number) => {
    const { data } = await httpService.delete(`${serverEndpoints.BOOKINGS}/${payload}`);

    return data;
  },
};

export default userService;
