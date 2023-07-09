import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomLoginHint, Input, InputEmail, InputLogin, InputPassword, InputPhone } from 'components';

import schema from './schema';
import { Text, ButtonEdit, Buttons, ButtonSave, Form, Header, Fields, Title, СredentialsStyled } from './styles';
import { TCredentials, TFormValues, TSubmitedData } from './types';

const Сredentials = ({ data }: TCredentials) => {
  const dispatch = useDispatch();
  const [inputDisable, setInputDisable] = useState(true);
  const { username, firstName, lastName, email, phone } = data;

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
  } = useForm<TFormValues>({ resolver: yupResolver(schema), defaultValues, mode: 'all' });

  const onBtnEditClick = () => setInputDisable(!inputDisable);
  const onSubmit: SubmitHandler<TFormValues> = (data: TSubmitedData) => {
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
        <Text>Здесь вы можете отредактировать информацию о себе</Text>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.FORM_PROFILE}>
        <Fields>
          {/* TODO add login and password fields */}
          {/* <InputLogin
            name='username'
            labelText='Логин'
            error={errors.login?.message}
            customHint={<CustomLoginHint value={username} />}
          /> */}
          {/* <InputPassword
            name='password'
            labelText='Пароль'
            error={errors.password?.message}
            isDisabled={inputDisable}
          /> */}
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
        </Fields>
        <Buttons>
          <ButtonEdit onClick={onBtnEditClick} dataTestId={dataTestId.BUTTON_EDIT}>
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
