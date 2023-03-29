import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';

const SuccessfulStep = () => {
  const navigate = useNavigate();

  const handleNavigateClick = () => navigate(pageRoutes.AUTH);

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Регистрация успешна</Title>
      <Paragraph>
        Регистрация прошла успешно. Зайдите
        <br /> в личный кабинет, используя свои логин и <br /> пароль
      </Paragraph>
      <Button type='submit' onClick={handleNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        вход
      </Button>
    </ModalStyled>
  );
};

export default SuccessfulStep;
