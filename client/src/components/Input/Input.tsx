import { ChangeEventHandler } from 'react';
import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';
import { Hint } from 'components';

import { InputStyled, Label, LabelText, Wrapper } from './styles';
import { TInput } from './types';
import { useFormContext } from 'react-hook-form';

const Input = ({ type = 'text', name, labelText, error, isDisabled, required = true }: TInput) => {
  const { register, setValue, clearErrors } = useFormContext();

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setValue(name, value);
    clearErrors(name);
  };

  return (
    <Wrapper>
      <Label>
        <InputStyled
          {...register(name, {
            required: required && hintText.EMPTY_FIELD,
          })}
          type={type}
          onChange={handleChange}
          placeholder=' '
          disabled={isDisabled}
          data-test-id={dataTestId.INPUT}
        />
        <LabelText>{labelText}</LabelText>
      </Label>
      {error && <Hint colored={true}>{error}</Hint>}
    </Wrapper>
  );
};

export default Input;
