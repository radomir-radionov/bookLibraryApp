import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';
import { useFormContext } from 'react-hook-form';
import { Hint } from 'components';

import { HintWord, InputMaskStyled, Label, LabelText, Wrapper } from './styles';

type TProps = {
  name: string;
  view: 'form' | 'profile';
  labelText: string;
  alwaysShowMask?: boolean;
  error?: string | boolean;
  isDisabled?: boolean;
  required?: boolean;
};

const InputPhone = ({ name, view, labelText, alwaysShowMask, error, isDisabled, required = true }: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log();
  return (
    <Wrapper $errors={error}>
      <Label>
        <InputMaskStyled
          {...register(name, {
            required: required && hintText.EMPTY_FIELD,
            pattern: {
              value: RegExp.phone,
              message: hintText.VALID_PHONE_NUMBER,
            },
          })}
          type='text'
          placeholder=' '
          mask='+375 (99) 999-99-99'
          maskChar='x'
          alwaysShowMask={alwaysShowMask}
          autoComplete={name}
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
      </Label>
      {view === 'profile' && (
        <Hint>
          {errors?.phone?.message ? (
            <HintWord $colored={true}>{error}</HintWord>
          ) : (
            <HintWord>{hintText.VALID_PHONE_NUMBER}</HintWord>
          )}
        </Hint>
      )}
    </Wrapper>
  );
};

export default InputPhone;
