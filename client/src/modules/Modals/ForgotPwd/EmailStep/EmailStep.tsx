import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { forgotPwdActions } from 'redux/forgotPwd';
import { Button, FormFooter, InputEmail } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import {
  AssistiveText,
  Back,
  BtnField,
  ChevronLeftIcon,
  Form,
  InputField,
  LinkStyled,
  ModalStyled,
  Title,
  Wrapper,
} from './styles';

type TEmailForm = {
  email: string;
};

const EmailStep = () => {
  const dispatch = useDispatch();

  const methods = useForm<TEmailForm>({ mode: 'onBlur', reValidateMode: 'onChange' });
  const { errors } = methods.formState;
  const isBtnDisabled = !!errors.email;

  const onSubmit: SubmitHandler<TEmailForm> = (data) => dispatch(forgotPwdActions.postForgotPwd(data));

  return (
    <ModalStyled>
      <Back>
        <LinkStyled to={pageRoutes.AUTH}>
          <ChevronLeftIcon />
          вход в личный кабинет
        </LinkStyled>
      </Back>
      <Wrapper>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.SEND_EMAIL_FORM}>
            <Title>Восстановление пароля</Title>
            <InputField>
              <InputEmail name='email' labelText='Email' error={errors.email?.message} />
              <AssistiveText $errors={!!errors.email}>
                На этот email будет отправлено письмо с инструкциями по восстановлению пароля
              </AssistiveText>
            </InputField>
            <BtnField>
              <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
                восстановить
              </Button>
              <FormFooter text='Нет учётной записи?' link={pageRoutes.REGISTRATION} linkText='Регистрация' />
            </BtnField>
          </Form>
        </FormProvider>
      </Wrapper>
    </ModalStyled>
  );
};

export default EmailStep;
