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

type TFileUploadProps = {
  picture: any;
};

const Header = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | undefined>('');
  const { id, firstName, lastName, avatar } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFileUploadProps>();

  const onSubmit = (imgData: TFileUploadProps) => {
    const formData = new FormData();
    formData.append('files', imgData.picture[0]);
    imgData.picture.length && convertFile(imgData.picture[0], setImage);
    dispatch(userActions.putAvatar({ id, formData }));
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
