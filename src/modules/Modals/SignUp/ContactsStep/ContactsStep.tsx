import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormFooter, InputEmail, InputPhone } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import schema from './schema';
import { BtnField, Form, InputFields, ModalStyled, StepText, Title, TitleBox } from './styles';

type TContactForm = {
  phone: string;
  email: string;
};

const ContactStep = () => {
  const dispatch = useDispatch();

  const methods = useForm<TContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { errors } = methods.formState;
  const isBtnDisabled = !!errors.phone || !!errors.email;

  const onSubmit: SubmitHandler<TContactForm> = (data) => {
    dispatch(registrationActions.setContactStepData(data));
    dispatch(registrationActions.postRegistrationData());
  };

  return (
    <ModalStyled>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
          <TitleBox>
            <Title>Регистрация</Title>
            <StepText>3 шаг из 3</StepText>
          </TitleBox>
          <InputFields>
            <InputPhone name='phone' labelText='Номер телефона' error={errors.phone?.message} view='form' />
            <InputEmail name='email' labelText='E-mail' error={errors.email?.message} />
          </InputFields>
          <BtnField>
            <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
              зарегистрироваться
            </Button>
            <FormFooter text='Есть учётная запись?' link={pageRoutes.AUTH} linkText='войти' />
          </BtnField>
        </Form>
      </FormProvider>
    </ModalStyled>
  );
};

export default ContactStep;
