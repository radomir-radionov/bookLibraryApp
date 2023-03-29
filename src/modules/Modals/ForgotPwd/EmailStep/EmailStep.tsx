import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { forgotPwdActions } from 'redux/forgotPwd';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputEmail } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import {
  AssistiveText,
  Back,
  BtnField,
  ChevronLeftIcon,
  ChevronRightIcon,
  Form,
  IconBox,
  InputField,
  LinkStyled,
  LinkText,
  LoginInfo,
  ModalStyled,
  Title,
  Wrapper,
} from './styles';

type EmailFormProps = {
  email: string;
};

const EmailStep = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!errors.email;

  const onSubmit: SubmitHandler<EmailFormProps> = (data) => {
    dispatch(forgotPwdActions.postForgotPwd(data));
    dispatch(forgotPwdActions.setStep());
  };

  return (
    <ModalStyled>
      <Back>
        <LinkStyled to={pageRoutes.AUTH}>
          <ChevronLeftIcon />
          вход в личный кабинет
        </LinkStyled>
      </Back>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.SEND_EMAIL_FORM}>
          <Title>Восстановление пароля</Title>
          <InputField>
            <InputEmail register={register('email')} labelText='Email' errors={errors.email} />
            <AssistiveText $errors={!!errors.email}>
              На этот email будет отправлено письмо с инструкциями по восстановлению пароля
            </AssistiveText>
          </InputField>
          <BtnField>
            <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
              восстановить
            </Button>
            <LoginInfo>
              Нет учётной записи?
              <LinkText to={pageRoutes.REGISTRATION}>
                Регистрация
                <IconBox>
                  <ChevronRightIcon />
                </IconBox>
              </LinkText>
            </LoginInfo>
          </BtnField>
        </Form>
      </Wrapper>
    </ModalStyled>
  );
};

export default EmailStep;
