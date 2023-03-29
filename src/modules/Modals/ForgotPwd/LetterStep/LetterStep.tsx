import dataTestId from 'constants/dataTestId';

import { ModalStyled, Paragraph, Title } from './styles';

const LetterStep = () => {
  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Письмо выслано</Title>
      <Paragraph>Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля</Paragraph>
    </ModalStyled>
  );
};

export default LetterStep;
