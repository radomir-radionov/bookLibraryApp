import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import { useEffect, useState, FocusEvent } from 'react';
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
import { TInputProps } from './types';

const InputPasswordConfirmation = ({ register, labelText, watchValue, error, payload }: TInputProps) => {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);
  const [fieldType, setFieldType] = useState('text');

  const isPasswordsEquals = payload?.isPasswordsEquals;
  const isMinQtyOfChars = RegExp.minQtyOfChars.test(value);
  const isCapitalLetter = RegExp.capitalLetter.test(value);
  const isDigit = RegExp.digit.test(value);

  const onChange = (event: FocusEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setLocalError(!isMinQtyOfChars || !isCapitalLetter || !isDigit);
  };

  const onToggleClick = () => (fieldType === 'password' ? setFieldType('text') : setFieldType('password'));

  useEffect(
    () => setLocalError(!isMinQtyOfChars || !isCapitalLetter || !isDigit),
    [isCapitalLetter, isDigit, isMinQtyOfChars]
  );

  return (
    <Wrapper $error={error}>
      <Label>
        <InputStyled
          {...register}
          type={fieldType}
          onChange={onChange}
          placeholder=' '
          $error={error}
          autoComplete={register?.name}
        />
        <LabelText>{labelText}</LabelText>

        {!!value.length && isPasswordsEquals && <CheckIcon data-test-id={dataTestId.CHECKMARK} />}

        <IconWrapper onClick={onToggleClick}>
          {!!value.length ? (
            !!value.length && fieldType === 'password' ? (
              <ActionVisibleIcon data-test-id={dataTestId.EYE_OPENED} />
            ) : (
              <ActionUnvisibleIcon data-test-id={dataTestId.EYE_CLOSED} />
            )
          ) : null}
        </IconWrapper>
      </Label>

      {isPasswordsEquals && localError && !error && (
        <Hint>
          Пароль <HintWord $colored={!!value.length && !isMinQtyOfChars}>не менее 8 символов</HintWord>,{' '}
          <HintWord $colored={!!value.length && !isCapitalLetter}>с заглавной буквой</HintWord> и{' '}
          <HintWord $colored={!!value.length && !isDigit}>цифрой</HintWord>
        </Hint>
      )}

      {isPasswordsEquals && !localError && !error && <Hint>{hintText.INVALID_PASSWORD}</Hint>}

      {isPasswordsEquals && error && !!watchValue?.length && <Hint colored={true}>{hintText.INVALID_PASSWORD}</Hint>}

      {isPasswordsEquals && error && !!!value.length && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}

      {!isPasswordsEquals && error && <Hint colored={true}>{error.message}</Hint>}
    </Wrapper>
  );
};

export default InputPasswordConfirmation;
