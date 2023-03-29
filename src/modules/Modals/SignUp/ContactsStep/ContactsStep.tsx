import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormFooter, InputEmail, InputPhone } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import { BtnField, Form, InputFields, ModalStyled, StepText, Title, TitleBox } from './styles';

type FormValuesProps = {
  phone: string;
  email: string;
};

const ContactStep = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!errors.phone || !!errors.email;

  const onSubmit: SubmitHandler<FormValuesProps> = (data) => {
    dispatch(registrationActions.setContactStepData(data));
    dispatch(registrationActions.postRegistrationData());
  };

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
        <TitleBox>
          <Title>Регистрация</Title>
          <StepText>3 шаг из 3</StepText>
        </TitleBox>
        <InputFields>
          <InputPhone
            register={register('phone')}
            labelText='Номер телефона'
            watchValue={watch('phone')}
            errors={errors.phone}
            view='form'
          />
          <InputEmail register={register('email')} labelText='E-mail' errors={errors.email} />
        </InputFields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            зарегистрироваться
          </Button>
          <FormFooter text=' Есть учётная запись?' link={pageRoutes.AUTH} linkText='войти' />
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default ContactStep;
