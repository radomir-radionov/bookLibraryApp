import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import { ChangeEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { Hint } from 'components';

import { InputStyled, Label, LabelText, Wrapper } from './styles';
import { TInputProps } from './types';

const InputLogin = ({ name, labelText, isDisabled, customHint, error, required = true }: TInputProps) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

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
            pattern: {
              value: RegExp.login,
              message: hintText.INVALID_LOGIN,
            },
          })}
          onChange={handleChange}
          placeholder=' '
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
      </Label>

      {!errors?.username?.message ? customHint : <Hint colored={true}>{error}</Hint>}
    </Wrapper>
  );
};

export default InputLogin;
