import serverEndpoints from 'constants/apiEndpoints';

import httpService from '../../http';

import { PostCommentProps, PutCommentProps, TPutUserReq } from './types';

const userService = {
  getUser: async (id: number) => {
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
  putUserAvatar: async ({ userId, payload }: any) => {
    const { data } = await httpService.put(`${serverEndpoints.USER}/${userId}/avatar`, payload);
    // return data;
  },
  deleteBooking: async (payload: number) => {
    const resp = await httpService.delete(`${serverEndpoints.BOOKINGS}/${payload}`);

    return resp.data;
  },
};

export default userService;
