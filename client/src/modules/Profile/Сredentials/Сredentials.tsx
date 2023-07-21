import dataTestId from 'constants/dataTestId';

import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';
import { Input, InputEmail, InputLogin, InputPassword, InputPhone } from 'components';

import { Text, ButtonEdit, Buttons, ButtonSave, Form, Header, Fields, Title, СredentialsStyled } from './styles';
import { TCredentials, TFormValues, TSubmitedData } from './types';

const Сredentials = ({ data }: TCredentials) => {
  const dispatch = useDispatch();
  const [inputDisable, setInputDisable] = useState(true);

  const methods = useForm<TFormValues>({
    defaultValues: {
      login: data.username,
      password: 'G111aaa1',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const { errors } = methods.formState;

  const onBtnEditClick = () => setInputDisable(!inputDisable);
  const onSubmit: SubmitHandler<TFormValues> = (data: TSubmitedData) => {
    data.username = data.login;
    delete data.login;
    const payload = { ...data };

    dispatch(userActions.putEditUserData(payload));
  };

  const isButtonSaveDisabled = !!(inputDisable || errors.login || errors.password || errors.email);

  useEffect(() => {
    methods.reset({
      login: data.username,
      password: 'G111aaa1',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    });
  }, [data, methods.reset]);

  return (
    <СredentialsStyled>
      <Header>
        <Title>Учётные данные</Title>
        <Text>Здесь вы можете отредактировать информацию о себе</Text>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.FORM_PROFILE}>
          <Fields>
            <InputLogin name='login' labelText='Логин' error={errors.login?.message} isDisabled={inputDisable} />
            <InputPassword
              name='password'
              labelText='Пароль'
              error={errors.password?.message}
              isDisabled={inputDisable}
            />
            <Input name='firstName' labelText='Имя' error={errors.firstName?.message} isDisabled={inputDisable} />
            <Input name='lastName' labelText='Фамилия' error={errors.firstName?.message} isDisabled={inputDisable} />
            <InputPhone
              name='phone'
              labelText='Номер телефона'
              alwaysShowMask={true}
              defaultValue={data.phone}
              error={errors.phone?.message}
              isDisabled={inputDisable}
              view='profile'
            />
            <InputEmail name='email' labelText='E-mail' error={errors.email?.message} isDisabled={inputDisable} />
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
      </FormProvider>
    </СredentialsStyled>
  );
};

export default Сredentials;
