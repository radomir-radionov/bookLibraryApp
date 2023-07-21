import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Text, Title } from './styles';

const SuccessfulStep = () => {
  const navigate = useNavigate();

  const onBtnNavigateClick = () => navigate(pageRoutes.AUTH);

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Регистрация успешна</Title>
      <Text>
        Регистрация прошла успешно. Зайдите
        <br /> в личный кабинет, используя свои логин и <br /> пароль
      </Text>
      <Button type='submit' onClick={onBtnNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        вход
      </Button>
    </ModalStyled>
  );
};

export default SuccessfulStep;
