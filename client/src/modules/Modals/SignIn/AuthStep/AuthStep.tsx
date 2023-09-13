import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectErrorStatus } from 'redux/auth/selectors';
import { Button, FormFooter, Input, InputPassword } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import {
  AssistiveText,
  BtnField,
  Fields,
  Form,
  InputAuthPasswordWrapper,
  LinkStyled,
  ModalStyled,
  Title,
} from './styles';
import hintText from 'constants/hintText';

type TAuthForm = {
  email: string;
  password: string;
};

const AuthStep = () => {
  const dispatch = useDispatch();
  const errorStatus = useSelector(selectErrorStatus);
  const navigate = useNavigate();

  const methods = useForm<TAuthForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { errors } = methods.formState;

  const isBtnDisabled = !!(errors.email || errors.password);

  const onSubmit: SubmitHandler<TAuthForm> = (data) => dispatch(authActions.setAuthData({ data, navigate }));

  return (
    <ModalStyled>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.AUTH_FORM}>
          <Title>Вход в личный кабинет</Title>
          <Fields>
            <Input name='email' labelText='Email' error={errors.email?.message} />
            <InputAuthPasswordWrapper>
              <InputPassword name='password' labelText='Пароль' error={errors.password?.message} />
              <AssistiveText visiable={errorStatus === 400}>
                <span data-test-id={dataTestId.HINT}>{hintText.INVALID_DATA || '1'}</span>
                <br />
                <LinkStyled to={pageRoutes.FORGOT_PWD}>Восстановить?</LinkStyled>
              </AssistiveText>
              {errorStatus !== 400 && <LinkStyled to={pageRoutes.FORGOT_PWD}>{hintText.FORGOT_DATA}</LinkStyled>}
            </InputAuthPasswordWrapper>
          </Fields>
          <BtnField>
            <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
              вход
            </Button>
            <FormFooter text='Нет учётной записи?' link={pageRoutes.REGISTRATION} linkText='Регистрация' />
          </BtnField>
        </Form>
      </FormProvider>
    </ModalStyled>
  );
};

export default AuthStep;
