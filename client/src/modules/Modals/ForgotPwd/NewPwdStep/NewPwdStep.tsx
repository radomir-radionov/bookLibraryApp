import dataTestId from 'constants/dataTestId';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { forgotPwdActions } from 'redux/forgotPwd';
import { Button, InputPasswordConfirmation } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { Hint, BtnField, Form, InputFields, ModalStyled, Title } from './styles';

type TNewPwdForm = { password: string; passwordConfirmation: string };

const NewPwdStep = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TNewPwdForm>();

  const { password, passwordConfirmation } = watch();

  const isPasswordsEquals = password === passwordConfirmation;
  const isBtnDisabled = !!errors.password || !!errors.passwordConfirmation;

  const payload = {
    name: 'passwordConfirmation',
    value: passwordConfirmation,
    isPasswordsEquals,
    error: errors.passwordConfirmation,
  };
  const onSubmit: SubmitHandler<TNewPwdForm> = (data) => dispatch(forgotPwdActions.postResetPwd({ ...data, code }));

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.RESET_PASSWORD_FORM}>
        <Title>Восстановление пароля</Title>
        <InputFields>
          <InputPasswordConfirmation
            register={register('password')}
            watchValue={watch('password')}
            name='password'
            labelText='Новый пароль'
            error={errors.password?.message}
            payload={payload}
          />
          <InputPasswordConfirmation
            register={register('passwordConfirmation')}
            watchValue={watch('passwordConfirmation')}
            name='passwordConfirmation'
            labelText='Повторите пароль'
            error={errors.passwordConfirmation?.message}
          />
        </InputFields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            сохранить изменения
          </Button>
          <Hint>После сохранения войдите в библиотеку, используя новый пароль</Hint>
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default NewPwdStep;
