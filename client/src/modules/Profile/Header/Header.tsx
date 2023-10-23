import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';
import { DefaultAvatarImg } from 'assets';
import { convertFile } from 'utils/convertFile';

import {
  ActionAvatarIcon,
  Avatar,
  Form,
  HeaderStyled,
  Img,
  InputFileUpload,
  Label,
  Mask,
  Text,
  ProfileAvatar,
  UserName,
} from './styles';
import { TUser } from 'types/user';
import base64ToBlobAndUrl from 'utils/base64ToBlobAndUrl.js';

type TProps = {
  data: TUser;
};

type TAvatar = {
  picture: any;
};

const Header = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const { firstName, lastName, avatar } = data;
  console.log('avatar', avatar);

  //   const blobUrl = base64ToBlobAndUrl(avatar, contentType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAvatar>();

  const onSubmit = (imgData: any) => {
    const formData = new FormData();
    formData.append('avatar', imgData.picture[0]);

    dispatch(userActions.updateAvatarReq(formData));
  };
  return (
    <HeaderStyled data-test-id={dataTestId.PROFILE_AVATAR}>
      <ProfileAvatar>
        <Form onChange={handleSubmit(onSubmit)}>
          <InputFileUpload id='upload' type='file' {...register('picture')} />
          <Label htmlFor='upload'>
            <Mask>
              <ActionAvatarIcon />
            </Mask>
          </Label>
          {/* {avatar ? (
            <Avatar src={`${blobUrl}`} alt='profile-avatar' />
          ) : (
            <Img src={DefaultAvatarImg} alt='default-avatar' data-test-id={dataTestId.PROFILE_AVATAR} />
          )} */}
        </Form>
      </ProfileAvatar>
      <UserName>
        <Text>{lastName}</Text>
        <Text>{firstName}</Text>
      </UserName>
    </HeaderStyled>
  );
};

export default Header;
