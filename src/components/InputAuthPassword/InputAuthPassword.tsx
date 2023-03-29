import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useState } from 'react';
import { Hint } from 'components';

import { ActionUnvisibleIcon, ActionVisibleIcon, IconWrapper, InputStyled, Label, LabelText, Wrapper } from './styles';
import IInputProps from './types';

const InputAuthPassword = ({ labelText, watchValue, register, errors }: IInputProps) => {
  const [fieldType, setFieldType] = useState('text');
  const toggleShow = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));
  const isValueLength = watchValue?.length > 0;

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
        <IconWrapper onClick={toggleShow}>
          {isValueLength && fieldType === 'password' && <ActionVisibleIcon data-test-id={dataTestId.EYE_OPENED} />}
          {isValueLength && fieldType === 'text' && <ActionUnvisibleIcon data-test-id={dataTestId.EYE_CLOSED} />}
        </IconWrapper>
      </Label>

      {!!errors && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}
    </Wrapper>
  );
};

export default InputAuthPassword;
