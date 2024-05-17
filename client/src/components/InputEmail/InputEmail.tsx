import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';
import { useSelector } from 'react-redux';
import { selectResponseMessage } from 'redux/forgotPwd/selectors';
import { Hint } from 'components';

import { InputStyled, Label, LabelText, Wrapper } from './styles';
import { useFormContext } from 'react-hook-form';

type TInput = {
  name: string;
  labelText: string;
  error?: string | boolean;
  isDisabled?: boolean;
  required?: boolean;
};

const InputEmail = ({ name, labelText, error, isDisabled, required = true }: TInput) => {
  const responseMessage = useSelector(selectResponseMessage);
  const { register } = useFormContext();

  const isValidEmail = error === hintText.INVALID_EMAIL;
  const isEmptyEmail = error === hintText.EMPTY_FIELD;

  return (
    <Wrapper>
      <Label>
        <InputStyled
          {...register(name, {
            required: required && hintText.EMPTY_FIELD,
            pattern: {
              value: RegExp.email,
              message: hintText.INVALID_EMAIL,
            },
          })}
          type='text'
          placeholder=' '
          $error={error}
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
      </Label>
      <Hint colored={true}>
        {isValidEmail && error}
        {isEmptyEmail && hintText.EMPTY_FIELD}
        {(isValidEmail || isEmptyEmail) && responseMessage ? null : responseMessage}
      </Hint>
    </Wrapper>
  );
};

export default InputEmail;
