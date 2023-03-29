import hintText from 'constants/hintText';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { Hint } from 'components';

import { HintWord, InputMaskStyled, Label, LabelText, Wrapper } from './styles';

type InputPhoneProps = {
  view: 'form' | 'profile';
  labelText: string;
  alwaysShowMask?: boolean;
  watchValue?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
  isDisabled?: boolean;
};

const InputPhone = ({ view, labelText, alwaysShowMask, register, errors, isDisabled }: InputPhoneProps) => {
  const { name } = register;

  return (
    <Wrapper $errors={errors}>
      <Label>
        <InputMaskStyled
          {...register}
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
      {view === 'form' && (
        <>
          {errors?.message && <Hint colored={true}>{errors.message}</Hint>}
          {!errors?.message && <Hint>{hintText.VALID_PHONE_NUMBER}</Hint>}
        </>
      )}
      {view === 'profile' && (
        <Hint>
          {errors?.message && <HintWord $colored={true}>{errors.message}</HintWord>}
          {!errors?.message && <HintWord>{hintText.VALID_PHONE_NUMBER}</HintWord>}
        </Hint>
      )}
    </Wrapper>
  );
};

export default InputPhone;
