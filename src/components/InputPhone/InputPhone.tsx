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
  defaultValue: string;
  error?: string | boolean;
  isDisabled?: boolean;
  required?: boolean;
};

const InputPhone = ({
  name,
  view,
  labelText,
  alwaysShowMask,
  defaultValue,
  error,
  isDisabled,
  required = true,
}: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          value={defaultValue}
          placeholder=' '
          mask='+375 (99) 999-99-99'
          maskChar='x'
          alwaysShowMask={alwaysShowMask}
          autoComplete={name}
          disabled={isDisabled}
        />
        <LabelText>{labelText}</LabelText>
      </Label>
      {view === 'form' && (
        <>
          {errors?.phone?.message && <Hint colored={true}>{error}</Hint>}
          {!errors?.phone?.message && <Hint>{hintText.VALID_PHONE_NUMBER}</Hint>}
        </>
      )}
      {view === 'profile' && (
        <Hint>
          {errors?.phone?.message && <HintWord $colored={true}>{error}</HintWord>}
          {!errors?.phone?.message && <HintWord>{hintText.VALID_PHONE_NUMBER}</HintWord>}
        </Hint>
      )}
    </Wrapper>
  );
};

export default InputPhone;
