import { validateForDigit, validateForQtyOfCharacters, validateForUppercase } from 'utils/validations';

import { ErrorText, HintStyled } from './styles';

type TCustomPasswordHintProps = {
  value: string;
};

const CustomPasswordHint = ({ value }: TCustomPasswordHintProps) => {
  return (
    <HintStyled>
      Пароль <ErrorText $isValid={!!value?.length && !validateForQtyOfCharacters(value)}>не менее 8 символов</ErrorText>
      , с <ErrorText $isValid={!!value?.length && !validateForUppercase(value)}>заглавной буквой</ErrorText> и{' '}
      <ErrorText $isValid={!!value?.length && !validateForDigit(value)}>цифрой</ErrorText>
    </HintStyled>
  );
};

export default CustomPasswordHint;
