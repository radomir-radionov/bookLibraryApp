import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useState } from 'react';
import { Hint } from 'components';

import { ActionUnvisibleIcon, ActionVisibleIcon, IconWrapper, InputStyled, Label, LabelText, Wrapper } from './styles';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TProps = {
  labelText: string;
  watchValue: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
};

const InputAuthPassword = ({ labelText, watchValue, register, errors }: TProps) => {
  const [fieldType, setFieldType] = useState('text');
  const onToggleClick = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));

  return (
    <Wrapper $errors={errors}>
      <Label>
        <InputStyled
          type={fieldType}
          placeholder=' '
          $errors={errors}
          {...register}
          autoComplete={register.name}
          data-test-id={dataTestId.INPUT_PASS}
        />
        <LabelText>{labelText}</LabelText>
        <IconWrapper onClick={onToggleClick}>
          {!!watchValue.length && fieldType === 'password' && (
            <ActionVisibleIcon data-test-id={dataTestId.EYE_OPENED} />
          )}
          {!!watchValue.length && fieldType === 'text' && <ActionUnvisibleIcon data-test-id={dataTestId.EYE_CLOSED} />}
        </IconWrapper>
      </Label>
      {!!errors && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}
    </Wrapper>
  );
};

export default InputAuthPassword;
