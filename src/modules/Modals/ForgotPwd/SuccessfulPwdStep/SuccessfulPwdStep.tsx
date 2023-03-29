import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';

const SuccessfulStep = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => navigate(pageRoutes.AUTH);

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Новые данные сохранены</Title>
      <Paragraph>
        Зайдите в личный кабинет, <br />
        используя свои логин и новый пароль
      </Paragraph>
      <Button type='submit' onClick={handleSubmitClick} variant={BUTTON_VARIANTS.LARGE}>
        вход
      </Button>
    </ModalStyled>
  );
};

export default SuccessfulStep;
