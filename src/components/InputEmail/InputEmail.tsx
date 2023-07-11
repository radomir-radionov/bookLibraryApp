import hintText from 'constants/hintText';

import { useState, FocusEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectResponseMessage } from 'redux/forgotPwd/selectors';
import { Hint } from 'components';

import { InputStyled, Label, LabelText, Wrapper } from './styles';
import { InputProps } from './types';

const InputEmail = ({ register, labelText, errors, isDisabled }: InputProps) => {
  // isBlur state should be only for tests
  const [isBlur, setIsBlur] = useState(false);
  const responseMessage = useSelector(selectResponseMessage);

  const isValidEmail = errors?.message === hintText.INVALID_EMAIL;
  const isEmptyEmail = errors?.message === hintText.EMPTY_FIELD;

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsBlur(true);
    register.onBlur(event);
  };

  return (
    <Wrapper>
      <Label>
        <InputStyled {...register} type='text' onBlur={onBlur} placeholder=' ' $errors={errors} disabled={isDisabled} />
        <LabelText>{labelText}</LabelText>
      </Label>
      <Hint colored={true}>
        {isValidEmail && errors?.message}
        {responseMessage}
        {isEmptyEmail && hintText.EMPTY_FIELD}
      </Hint>
    </Wrapper>
  );
};

export default InputEmail;
