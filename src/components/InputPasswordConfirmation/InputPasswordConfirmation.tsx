import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import { useEffect, useState } from 'react';
import { Hint } from 'components';

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
import InputProps from './types';

const InputPasswordConfirmation = ({ register, labelText, watchValue, clearErrors, errors, payload }: InputProps) => {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);
  const [fieldType, setFieldType] = useState('text');
  // isBlur state should be only for tests
  const [isBlur, setIsBlur] = useState(false);

  const toggleShow = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));
  const isMix = payload?.name === 'passwordConfirmation';
  const isValueLength = value.length > 0;
  const isWatchValueLength = watchValue?.length > 0;

  const isMinQtyOfChars = RegExp.minQtyOfChars.test(value);
  const isCapitalLetter = RegExp.capitalLetter.test(value);
  const isDigit = RegExp.digit.test(value);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setLocalError(!isMinQtyOfChars || !isCapitalLetter || !isDigit);
  };

  const handleFocus = () => clearErrors && clearErrors();

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBlur(true);
    register.onBlur(event);
  };

  useEffect(
    () => setLocalError(!isMinQtyOfChars || !isCapitalLetter || !isDigit),
    [isCapitalLetter, isDigit, isMinQtyOfChars]
  );

  return (
    <Wrapper $errors={errors}>
      <Label>
        <InputStyled
          {...register}
          type={fieldType}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=' '
          $errors={errors}
          autoComplete={register.name}
        />
        <LabelText>{labelText}</LabelText>

        {!!value.length && isMix && <CheckIcon $mix={isWatchValueLength} data-test-id={dataTestId.CHECKMARK} />}

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

      {isMix && localError && !errors && (
        <Hint>
          Пароль <HintWord $colored={isValueLength && !isMinQtyOfChars}>не менее 8 символов</HintWord>,{' '}
          <HintWord $colored={isValueLength && !isCapitalLetter}>с заглавной буквой</HintWord> и{' '}
          <HintWord $colored={isValueLength && !isDigit}>цифрой</HintWord>
        </Hint>
      )}

      {isMix && !localError && !errors && <Hint>{hintText.INVALID_PASSWORD}</Hint>}

      {isMix && errors && !!register.onBlur && !!watchValue?.length === true && (
        <Hint colored={true}>{hintText.INVALID_PASSWORD}</Hint>
      )}

      {isMix && errors && !isValueLength && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}

      {!isMix && errors && <Hint colored={true}>{errors.message}</Hint>}
    </Wrapper>
  );
};

export default InputPasswordConfirmation;
