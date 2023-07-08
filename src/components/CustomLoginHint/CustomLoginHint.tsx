import { validateForDigit, validateForLatinLetters } from 'utils/validations';

import { ErrorText, HintStyled } from './styles';

type TProps = {
  value: string;
};

const CustomLoginHint = ({ value }: TProps) => {
  return (
    <HintStyled>
      Используйте для логина{' '}
      <ErrorText $isValid={!!value?.length && !validateForLatinLetters(value)}>латинский алфавит</ErrorText> и{' '}
      <ErrorText $isValid={!!value?.length && !validateForDigit(value)}>цифры</ErrorText>
    </HintStyled>
  );
};

export default CustomLoginHint;
