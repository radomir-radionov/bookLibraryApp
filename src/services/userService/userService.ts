import serverEndpoints from 'constants/apiEndpoints';

import { AxiosResponse } from 'axios';
import { FileUploadResponseProps } from 'types/user';

import httpService from '../../http';

import { PostCommentsProps, PutCommentProps, PutEditUserDataProps } from './types';

const userService = {
  getUser: async () => {
    const resp = await httpService.get(serverEndpoints.USER);

    return resp.data;
  },
  putComment: async (payload: PutCommentProps) => {
    const { commentId } = payload;

    delete payload.commentId;

    const resp = await httpService.put(`${serverEndpoints.COMMENTS}/${commentId}`, payload);

    return resp.data;
  },
  postComments: async (payload: PostCommentsProps) => {
    const resp = await httpService.post(serverEndpoints.COMMENTS, payload);

    return resp.data;
  },
  putEditUserData: async (payload: PutEditUserDataProps) => {
    const resp = await httpService.put(`${serverEndpoints.EDIT_USER_DATA}/${payload.userId}`, payload.reqBody);

    return resp.data;
  },
  putUploadAvatar: async (payload: any) => {
    const config = {
      headers: { 'Content-type': 'multipart/form-data' },
    };

    const { data }: AxiosResponse<FileUploadResponseProps[]> = await httpService.post(
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
