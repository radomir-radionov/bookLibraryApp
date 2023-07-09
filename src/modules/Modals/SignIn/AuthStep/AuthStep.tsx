import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectErrorStatus } from 'redux/auth/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormFooter, Input, InputAuthPassword } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
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

type TFormValues = {
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
  } = useForm<TFormValues>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!(errors.identifier || errors.password);

  const onSubmit: SubmitHandler<TFormValues> = (data) => dispatch(authActions.setAuthData({ data, navigate }));

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.AUTH_FORM}>
        <Title>Вход в личный кабинет</Title>
        <Fields>
          <Input
            labelText='Логин'
            watchValue={watch('identifier')}
            register={register('identifier')}
            errors={errors.identifier}
          />
          <InputAuthPasswordWrapper>
            <InputAuthPassword
              labelText='Пароль'
              watchValue={watch('password')}
              register={register('password')}
              errors={errors.password}
            />
            <AssistiveText visiable={errorStatus === 400}>
              <span data-test-id={dataTestId.HINT}>Неверный логин или пароль!</span>
              <br />
              <LinkStyled to={pageRoutes.FORGOT_PWD}>Восстановить?</LinkStyled>
            </AssistiveText>
            {errorStatus !== 400 && <LinkStyled to={pageRoutes.FORGOT_PWD}>Забыли логин или пароль?</LinkStyled>}
          </InputAuthPasswordWrapper>
        </Fields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            вход
          </Button>
          <FormFooter text='Нет учётной записи?' link={pageRoutes.REGISTRATION} linkText='Регистрация' />
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default AuthStep;
