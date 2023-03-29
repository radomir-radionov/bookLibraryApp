import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useState } from 'react';
import { Hint } from 'components';

import { InputStyled, Label, LabelText, Wrapper } from './styles';
import { InputProps } from './types';

const Input = ({ type = 'text', value, labelText, register, errors, isDisabled }: InputProps) => {
  // isBlur state should be only for tests
  const [isBlur, setIsBlur] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBlur(true);
    register.onBlur(event);
  };

  return (
    <Wrapper>
      <Label>
        <InputStyled
          {...register}
          type={type}
          value={value}
          onBlur={handleBlur}
          placeholder=' '
          $errors={errors}
          disabled={isDisabled}
          data-test-id={dataTestId.INPUT}
        />
        <LabelText>{labelText}</LabelText>
      </Label>
      <Hint colored={true}>{errors && hintText.EMPTY_FIELD}</Hint>
    </Wrapper>
  );
};

export default Input;
