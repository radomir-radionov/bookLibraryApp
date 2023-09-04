import serverEndpoints from 'constants/apiEndpoints';

import { AxiosResponse } from 'axios';
import { TFileUploadResponse } from 'types/user';

import httpService from '../../http';

import { PostCommentProps, PutCommentProps, TPutUserReq } from './types';

const userService = {
  getUser: async (id: number) => {
    const resp = await httpService.get(`${serverEndpoints.USER}/${id}`);

    return resp.data;
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
  putAvatar: async (payload: any) => {
    const config = {
      headers: { 'Content-type': 'multipart/form-data' },
    };

    const { data }: AxiosResponse<TFileUploadResponse[]> = await httpService.post(
      serverEndpoints.UPLOAD_AVATAR,
      payload,
      config
    );

    return data;
  },
  putAvatarToServer: async (payload: any) => {
    const resp = await httpService.put(`${serverEndpoints.UPLOAD_AVATAR_BY_ID}/${payload.userId}`, payload.reqBody);

    return resp.data;
  },
  putUploadAvatarById: async (payload: any) => {
    const { data: userData }: AxiosResponse<any> = await httpService.put(
      `${serverEndpoints.UPLOAD_AVATAR_BY_ID}/${payload.id}`
    );

    return userData;
  },
  deleteBooking: async (payload: number) => {
    const resp = await httpService.delete(`${serverEndpoints.BOOKINGS}/${payload}`);

    return resp.data;
  },
};

export default userService;
