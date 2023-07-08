import dataTestId from 'constants/dataTestId';

import { ModalStyled, Text, Title } from './styles';

const LetterStep = () => {
  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Письмо выслано</Title>
      <Text>Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля</Text>
    </ModalStyled>
  );
};

export default LetterStep;
