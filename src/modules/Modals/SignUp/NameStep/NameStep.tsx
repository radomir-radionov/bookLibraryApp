import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { Button, FormFooter, Input } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { BtnField, Form, InputFields, ModalStyled, StepText, Title, TitleBox } from './styles';

type TNameForm = {
  firstName: string;
  lastName: string;
};

const NameStep = () => {
  const dispatch = useDispatch();

  const methods = useForm<TNameForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const { errors } = methods.formState;

  const isBtnDisabled = !!(errors.firstName || errors.lastName);

  const onSubmit: SubmitHandler<TNameForm> = (data) => {
    dispatch(registrationActions.setNameStepData(data));
    dispatch(registrationActions.setStep());
  };

  return (
    <ModalStyled>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
          <TitleBox>
            <Title>Регистрация</Title>
            <StepText>2 шаг из 3</StepText>
          </TitleBox>
          <InputFields>
            <Input name='firstName' labelText='Имя' error={errors.firstName?.message} />
            <Input name='lastName' labelText='Фамилия' error={errors.lastName?.message} />
          </InputFields>
          <BtnField>
            <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
              последний шаг
            </Button>
            <FormFooter text='  Есть учётная запись?' link={pageRoutes.AUTH} linkText=' войти' />
          </BtnField>
        </Form>
      </FormProvider>
    </ModalStyled>
  );
};

export default NameStep;
