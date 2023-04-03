import { validateForDigit, validateForLatinLetters } from 'utils/validations';

import { ErrorText, HintStyled } from './styles';

type TCustomLoginHintProps = {
  value: string;
};

const CustomLoginHint = ({ value }: TCustomLoginHintProps) => {
  return (
    <HintStyled>
      Используйте для логина{' '}
      <ErrorText $isValid={!!value?.length && !validateForLatinLetters(value)}>латинский алфавит</ErrorText> и{' '}
      <ErrorText $isValid={!!value?.length && !validateForDigit(value)}>цифры</ErrorText>
    </HintStyled>
  );
};

export default CustomLoginHint;
