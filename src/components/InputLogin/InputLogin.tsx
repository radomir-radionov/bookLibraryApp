import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import { useEffect, useState } from 'react';
import { Hint } from 'components';

import { HintWord, InputStyled, Label, LabelText, Wrapper } from './styles';
import { IInputProps } from './types';

const InputLogin = ({
  register,
  name = 'username',
  labelText,
  watchValue,
  clearErrors,
  errors,
  isDisabled,
  view,
}: IInputProps) => {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);

  const isLattinLetters = RegExp.lattinLetters.test(value);
  const isDigits = RegExp.digit.test(value);
  const isRussionLetters = RegExp.russionLetters.test(value);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    setValue(targetValue);
    setLocalError!(isLattinLetters || isDigits);
  };

  const handleFocus = () => clearErrors && clearErrors();

  useEffect(() => {
    if (value.length) {
      setLocalError(isRussionLetters || !isLattinLetters || !isDigits);
    }
  }, [isDigits, isLattinLetters, isRussionLetters, value]);

  return (
    <Wrapper>
      <Label>
        <InputStyled
          {...register}
          name={name}
          onFocus={handleFocus}
          placeholder=' '
          onChange={handleChange}
          $errors={errors}
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
      </Label>

      {view === 'form' && (
        <>
          {!localError && !errors && <Hint>{hintText.USE_LATTIN_LETTERS}</Hint>}
          {localError && !errors && (
            <Hint>
              Используйте для логина{' '}
              <HintWord $colored={!isLattinLetters || (!isLattinLetters && isDigits) || isRussionLetters}>
                латинский алфавит
              </HintWord>{' '}
              и <HintWord $colored={!isDigits || (!isDigits && isLattinLetters)}>цифры</HintWord>
            </Hint>
          )}
          {errors && !watchValue?.length && <Hint colored={true}>{hintText.EMPTY_FIELD}</Hint>}
          {errors && !!register.onBlur && !!watchValue?.length === true && (
            <Hint colored={true}>{hintText.USE_LATTIN_LETTERS}</Hint>
          )}
        </>
      )}

      {view === 'profile' && (
        <Hint>
          {!localError && !errors && hintText.USE_LATTIN_LETTERS}
          {localError && !errors && (
            <>
              Используйте для логина{' '}
              <HintWord $colored={!isLattinLetters || (!isLattinLetters && isDigits) || isRussionLetters}>
                латинский алфавит
              </HintWord>{' '}
              и <HintWord $colored={!isDigits || (!isDigits && isLattinLetters)}>цифры</HintWord>
            </>
          )}
          {errors && !watchValue?.length && <HintWord $colored={true}>{hintText.EMPTY_FIELD}</HintWord>}
          {errors && !!register.onBlur && !!watchValue?.length === true && (
            <HintWord $colored={true}>{hintText.USE_LATTIN_LETTERS}</HintWord>
          )}
        </Hint>
      )}
    </Wrapper>
  );
};

export default InputLogin;
