import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import { ChangeEventHandler, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Hint } from 'components';
import { isPasswordCorrect } from 'utils/validations';

import {
  ActionUnvisibleIcon,
  ActionVisibleIcon,
  CheckIcon,
  IconWrapper,
  InputStyled,
  Label,
  LabelText,
  Wrapper,
} from './styles';
import { TInputProps } from './types';

const InputPassword = ({ name, labelText, error, isDisabled, required = true, customHint }: TInputProps) => {
  const [fieldType, setFieldType] = useState('text');
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const passwordValue = watch().password;
  const isValid = isPasswordCorrect(passwordValue);
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setValue(name, value);
    clearErrors(name);
  };
  const onToggleClick = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));

  return (
    <Wrapper>
      <Label>
        <InputStyled
          {...register(name, {
            required: required && hintText.EMPTY_FIELD,
            pattern: {
              value: RegExp.password,
              message: hintText.INVALID_PASSWORD,
            },
          })}
          type={fieldType}
          onChange={onChange}
          placeholder=' '
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
        {isValid && <CheckIcon data-test-id={dataTestId.CHECKMARK} />}
        <IconWrapper onClick={onToggleClick}>
          {passwordValue?.length ? (
            fieldType === 'password' ? (
              <ActionVisibleIcon data-test-id={dataTestId.EYE_OPENED} />
            ) : (
              <ActionUnvisibleIcon data-test-id={dataTestId.EYE_CLOSED} />
            )
          ) : null}
        </IconWrapper>
      </Label>

      {errors?.password?.message ? <Hint colored={true}>{error}</Hint> : customHint}
    </Wrapper>
  );
};

export default InputPassword;
