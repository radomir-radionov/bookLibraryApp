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

type TProps = {
  data: TUser;
};

type TAvatar = {
  picture: any;
};

const Header = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const { firstName, lastName, avatar } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAvatar>();

  const onSubmit = (imgData: TAvatar) => {
    console.log(imgData);
    dispatch(userActions.updateAvatarReq(imgData));
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
          {avatar ? (
            <Avatar src={`${avatar}`} alt='profile-avatar' />
          ) : (
            <Img src={DefaultAvatarImg} alt='default-avatar' data-test-id={dataTestId.PROFILE_AVATAR} />
          )}
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
