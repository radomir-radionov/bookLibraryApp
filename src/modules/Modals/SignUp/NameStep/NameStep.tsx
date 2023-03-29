import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from 'components';
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

type FormValuesProps = {
  firstName: string;
  lastName: string;
};

const NameStep = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesProps>({ resolver: yupResolver(schema), mode: 'all' });

  const isBtnDisabled = !!errors.firstName || !!errors.lastName;

  const onSubmit: SubmitHandler<FormValuesProps> = (data) => {
    dispatch(registrationActions.setNameStepData(data));
    dispatch(registrationActions.setStep());
  };

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.REGISTER_FORM}>
        <TitleBox>
          <Title>Регистрация</Title>
          <StepText>2 шаг из 3</StepText>
        </TitleBox>
        <InputFields>
          <Input
            labelText='Имя'
            watchValue={watch('firstName')}
            errors={errors.firstName}
            register={register('firstName')}
          />
          <Input
            labelText='Фамилия'
            watchValue={watch('lastName')}
            errors={errors.lastName}
            register={register('lastName')}
          />
        </InputFields>
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.LARGE} disabled={isBtnDisabled}>
            последний шаг
          </Button>
          <LoginInfo>
            Есть учётная запись?
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

export default NameStep;
