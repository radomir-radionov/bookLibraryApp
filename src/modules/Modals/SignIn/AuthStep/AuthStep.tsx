import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectErrorStatus } from 'redux/auth/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, InputAuthPassword } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import {
  AssistiveText,
  BtnField,
  ChevronRightIcon,
  Form,
  IconBox,
  LinkStyled,
  LoginInfo,
  ModalStyled,
  Title,
} from './styles';

type FormValuesProps = {
  identifier: string;
  password: string;
};

const AuthStep = () => {
  const dispatch = useDispatch();
  const errorStatus = useSelector(selectErrorStatus);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!(errors.identifier || errors.password);

  const onSubmit: SubmitHandler<FormValuesProps> = (data) => dispatch(authActions.setAuthData({ data, navigate }));

  return (
    <ModalStyled>
      <Title>Вход в личный кабинет</Title>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.AUTH_FORM}>
        <Input
          labelText='Логин'
          watchValue={watch('identifier')}
          register={register('identifier')}
          errors={errors.identifier}
        />
        <InputAuthPassword
          labelText='Пароль'
          watchValue={watch('password')}
          register={register('password')}
          errors={errors.password}
        />

        <AssistiveText visiable={errorStatus === 400}>
          <span data-test-id={dataTestId.HINT}>Неверный логин или пароль!</span>
          <br />
          <span> Восстановить?</span>
        </AssistiveText>

        {errorStatus !== 400 && <LinkStyled to={pageRoutes.FORGOT_PWD}>Забыли логин или пароль?</LinkStyled>}

        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            ВХОД
          </Button>
          <LoginInfo>
            Нет учётной записи?
            <LinkStyled to={pageRoutes.REGISTRATION}>
              Регистрация
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

export default AuthStep;
