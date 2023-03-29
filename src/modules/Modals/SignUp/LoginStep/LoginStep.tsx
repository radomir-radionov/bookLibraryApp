import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputLogin, InputPassword } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import {
  BtnField,
  ChevronRightIcon,
  Form,
  IconBox,
  InputFields,
  LinkStyled,
  LoginInfo,
  ModalStyled,
  StepText,
  Title,
  TitleBox,
} from './styles';

type LoginFormProps = {
  username: string;
  password: string;
};

const LoginStep = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<LoginFormProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!(errors.username || errors.password);

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    dispatch(registrationActions.setLoginStepData(data));
    dispatch(registrationActions.setStep());
  };

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
        <TitleBox>
          <Title>Регистрация</Title>
          <StepText>1 шаг из 3</StepText>
        </TitleBox>
        <InputFields>
          <InputLogin
            register={register('username')}
            labelText='Придумайте логин для входа'
            watchValue={watch('username')}
            clearErrors={clearErrors}
            errors={errors.username}
            view='form'
          />
          <InputPassword
            register={register('password')}
            labelText='Пароль'
            watchValue={watch('password')}
            clearErrors={clearErrors}
            errors={errors.password}
            view='form'
          />
        </InputFields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            следующий шаг
          </Button>
          <LoginInfo>
            Есть учетная запись?
            <LinkStyled to={pageRoutes.AUTH}>
              войти
              <IconBox>
                <ChevronRightIcon />
              </IconBox>
            </LinkStyled>
          </LoginInfo>
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default LoginStep;
