import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useEffect, useState } from 'react';
import { Hint } from 'components';
import { RegExp } from 'utils/regExp';

import {
  ActionUnvisibleIcon,
  ActionVisibleIcon,
  CheckIcon,
  HintWord,
  IconWrapper,
  InputStyled,
  Label,
  LabelText,
  Wrapper,
} from './styles';
import IInputProps from './types';

const InputPassword = ({ register, labelText, watchValue, clearErrors, errors, isDisabled, view }: IInputProps) => {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);
  const [fieldType, setFieldType] = useState('text');
  const isValueLength = value.length > 0;

  const isMinQtyOfChars = RegExp.minQtyOfChars.test(value);
  const isCapitalLetter = RegExp.capitalLetter.test(value);
  const isDigit = RegExp.digit.test(value);
  const isInvalidData = !isMinQtyOfChars || !isCapitalLetter || !isDigit;

  const toggleShow = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    setValue(targetValue);
    setLocalError(isInvalidData);
  };

  const handleFocus = () => clearErrors && clearErrors();

  useEffect(() => {
    setLocalError(isInvalidData);
  }, [isCapitalLetter, isDigit, isInvalidData, isMinQtyOfChars]);

  return (
    <Wrapper $errors={errors}>
      <Label>
        <InputStyled
          {...register}
          type={fieldType}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder=' '
          $errors={errors}
          autoComplete={register.name}
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>

        {!localError && <CheckIcon data-test-id={dataTestId.CHECKMARK} />}

        <IconWrapper onClick={toggleShow}>
          {isValueLength ? (
            isValueLength && fieldType === 'password' ? (
              <ActionVisibleIcon data-test-id={dataTestId.EYE_OPENED} />
            ) : (
              <ActionUnvisibleIcon data-test-id={dataTestId.EYE_CLOSED} />
            )
          ) : null}
        </IconWrapper>
      </Label>

      {view === 'form' && (
        <>
          {localError && !errors && (
            <Hint>
              Пароль <HintWord $colored={isValueLength && !isMinQtyOfChars}>не менее 8 символов</HintWord>,{' '}
              <HintWord $colored={isValueLength && !isCapitalLetter}>с заглавной буквой</HintWord> и{' '}
              <HintWord $colored={isValueLength && !isDigit}>цифрой</HintWord>
            </Hint>
          )}

          {!localError && !errors && <Hint>{hintText.INVALID_PASSWORD}</Hint>}

          {errors && !watchValue?.length && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}

          {errors && !!register.onBlur && !!watchValue?.length === true && (
            <Hint colored={true}>{hintText.INVALID_PASSWORD}</Hint>
          )}
        </>
      )}

      {view === 'profile' && (
        <Hint>
          {localError && !errors && (
            <>
              Пароль <HintWord $colored={isValueLength && !isMinQtyOfChars}>не менее 8 символов</HintWord>,{' '}
              <HintWord $colored={isValueLength && !isCapitalLetter}>с заглавной буквой</HintWord> и{' '}
              <HintWord $colored={isValueLength && !isDigit}>цифрой</HintWord>
            </>
          )}
          {!localError && !errors && hintText.INVALID_PASSWORD}
          {errors && !watchValue?.length && <HintWord $colored={true}>{hintText.EMPTY_FIELD}</HintWord>}
          {errors && !!register.onBlur && !!watchValue?.length === true && (
            <HintWord $colored={true}>{hintText.INVALID_PASSWORD}</HintWord>
          )}
        </Hint>
      )}
    </Wrapper>
  );
};

export default InputPassword;
