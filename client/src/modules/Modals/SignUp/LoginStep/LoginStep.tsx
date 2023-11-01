import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { Button, CustomLoginHint, CustomPasswordHint, FormFooter, InputLogin, InputPassword } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { Form, InputFields, ModalStyled, NextStep, StepText, Title, TitleBox } from './styles';

type TLoginForm = {
  username: string;
  password: string;
};

const LoginStep = () => {
  const dispatch = useDispatch();

  const methods = useForm<TLoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { errors } = methods.formState;
  const { username, password } = methods.watch();

  const isBtnDisabled = !!(errors.username || errors.password);

  const onSubmit: SubmitHandler<TLoginForm> = (data) => {
    dispatch(registrationActions.setLoginStepData(data));
    dispatch(registrationActions.setStep());
  };

  return (
    <ModalStyled>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
          <TitleBox>
            <Title>Регистрация</Title>
            <StepText>1 шаг из 3</StepText>
          </TitleBox>
          <InputFields>
            <InputLogin
              name='username'
              labelText='Придумайте логин'
              error={errors.username?.message}
              customHint={<CustomLoginHint value={username} />}
            />
            <InputPassword
              name='password'
              labelText='Пароль'
              error={errors.password?.message}
              customHint={<CustomPasswordHint value={password} />}
            />
          </InputFields>
          <NextStep>
            <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
              следующий шаг
            </Button>
            <FormFooter text='Есть учетная запись?' link={pageRoutes.AUTH} linkText='войти' />
          </NextStep>
        </Form>
      </FormProvider>
    </ModalStyled>
  );
};

export default LoginStep;
