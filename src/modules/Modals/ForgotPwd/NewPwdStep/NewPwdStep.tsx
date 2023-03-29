import dataTestId from 'constants/dataTestId';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { forgotPwdActions } from 'redux/forgotPwd';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputPasswordConfirmation } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import { AssistiveText, BtnField, Form, InputFields, ModalStyled, Title } from './styles';
import { NewPwdFormProps } from './types';

const NewPwdStep = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<NewPwdFormProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!errors.password || !!errors.passwordConfirmation;

  const { password, passwordConfirmation } = watch();
  const isPasswordsEquals = password === passwordConfirmation;

  const payload = {
    name: 'passwordConfirmation',
    value: passwordConfirmation,
    isPasswordsEquals,
    error: errors.passwordConfirmation,
  };

  const onSubmit: SubmitHandler<NewPwdFormProps> = (data) => {
    const submitData = { ...data, code };

    dispatch(forgotPwdActions.postResetPwd(submitData));
  };

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.RESET_PASSWORD_FORM}>
        <Title>Восстановление пароля</Title>
        <InputFields>
          <InputPasswordConfirmation
            register={register('password')}
            labelText='Новый пароль'
            watchValue={watch('password')}
            clearErrors={clearErrors}
            errors={errors.password}
            payload={payload}
          />
          <InputPasswordConfirmation
            register={register('passwordConfirmation')}
            labelText='Повторите пароль'
            watchValue={watch('passwordConfirmation')}
            clearErrors={clearErrors}
            errors={errors.passwordConfirmation}
          />
        </InputFields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            сохранить изменения
          </Button>
          <AssistiveText>После сохранения войдите в библиотеку, используя новый пароль</AssistiveText>
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default NewPwdStep;
