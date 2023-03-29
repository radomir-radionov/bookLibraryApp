import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectResponseMessage } from 'redux/registration/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';

const FailedDataStep = () => {
  const responseMessage = useSelector(selectResponseMessage);
  const navigate = useNavigate();

  const handleNavigateClick = () => navigate(pageRoutes.REGISTRATION);

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Данные не сохранились</Title>
      <Paragraph>{responseMessage}</Paragraph>
      <Button type='submit' onClick={handleNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        назад к регистрации
      </Button>
    </ModalStyled>
  );
};

export default FailedDataStep;
