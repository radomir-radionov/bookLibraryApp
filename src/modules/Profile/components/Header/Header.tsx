import serverEndpoints from 'constants/apiEndpoints';
import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';
import { DefaultAvatarImg } from 'assets';
import { UserDataProps } from 'types/user';
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
  NameText,
  NameUser,
  ProfileAvatar,
} from './styles';

type HeaderProps = {
  data: UserDataProps;
};

type FileUploadProps = {
  picture: any;
};

const Header = ({ data }: HeaderProps) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | undefined>('');
  const { id, firstName, lastName, avatar } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FileUploadProps>();

  const onSubmit = (imgData: FileUploadProps) => {
    const formData = new FormData();

    formData.append('files', imgData.picture[0]);

    dispatch(userActions.putUploadAvatar({ id, formData }));

    if (imgData.picture.length) {
      convertFile(imgData.picture[0], setImage);
    }
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
      <NameUser>
        <NameText>{lastName}</NameText>
        <NameText>{firstName}</NameText>
      </NameUser>
    </HeaderStyled>
  );
};

export default Header;
