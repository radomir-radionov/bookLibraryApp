import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputEmail, InputLogin, InputPassword, InputPhone } from 'components';

import schema from './schema';
import {
  AssistiveText,
  ButtonEdit,
  Buttons,
  ButtonSave,
  Form,
  Header,
  TextField,
  Title,
  СredentialsStyled,
} from './styles';
import { CredentialsProps, FormValuesProps, SubmitedDataProps } from './types';

const Сredentials = ({ userData }: CredentialsProps) => {
  const dispatch = useDispatch();
  const [inputDisable, setInputDisable] = useState(true);
  const { username, firstName, lastName, email, phone } = userData;

  const defaultValues = {
    login: username,
    firstName,
    lastName,
    email,
    phone,
  };

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<FormValuesProps>({ resolver: yupResolver(schema), defaultValues, mode: 'all' });

  const handleEditUserDataClick = () => setInputDisable(!inputDisable);
  const onSubmit: SubmitHandler<FormValuesProps> = (data: SubmitedDataProps) => {
    data.username = data.login;
    delete data.login;
    const payload = { username, ...data };

    dispatch(userActions.putEditUserData(payload));
  };

  const isButtonSaveDisabled = !!(inputDisable || errors.login || errors.password || errors.email);

  return (
    <СredentialsStyled>
      <Header>
        <Title>Учётные данные</Title>
        <AssistiveText>Здесь вы можете отредактировать информацию о себе</AssistiveText>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.FORM_PROFILE}>
        <TextField>
          <InputLogin
            name='login'
            labelText='Логин'
            watchValue={watch('login')}
            register={register('login')}
            clearErrors={clearErrors}
            errors={errors.login}
            isDisabled={inputDisable}
            view='profile'
          />
          <InputPassword
            labelText='Пароль'
            watchValue={watch('password')}
            register={register('password')}
            clearErrors={clearErrors}
            errors={errors.password}
            isDisabled={inputDisable}
            view='profile'
          />
          <Input
            labelText='Имя'
            watchValue={watch('firstName')}
            register={register('firstName')}
            errors={errors.firstName}
            isDisabled={inputDisable}
          />
          <Input
            labelText='Фамилия'
            watchValue={watch('lastName')}
            register={register('lastName')}
            errors={errors.lastName}
            isDisabled={inputDisable}
          />
          <InputPhone
            labelText='Номер телефона'
            alwaysShowMask={true}
            watchValue={watch('phone')}
            register={register('phone')}
            errors={errors.phone}
            isDisabled={inputDisable}
            view='profile'
          />
          <InputEmail labelText='E-mail' register={register('email')} errors={errors.email} isDisabled={inputDisable} />
        </TextField>
        <Buttons>
          <ButtonEdit onClick={handleEditUserDataClick} dataTestId={dataTestId.BUTTON_EDIT}>
            Редактировать
          </ButtonEdit>
          <ButtonSave type='submit' disabled={isButtonSaveDisabled} dataTestId={dataTestId.BUTTON_SAVE}>
            Сохранить изменения
          </ButtonSave>
        </Buttons>
      </Form>
    </СredentialsStyled>
  );
};

export default Сredentials;
