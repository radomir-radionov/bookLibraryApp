import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { selectResponseMessage } from 'redux/registration/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';

const FailedStep = () => {
  const dispatch = useDispatch();
  const responseMessage = useSelector(selectResponseMessage);

  const handleNavigateClick = () => dispatch(registrationActions.setDefiniteStep(1));

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Данные не сохранились</Title>
      <Paragraph>{responseMessage}</Paragraph>
      <Button type='submit' onClick={handleNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        повторить
      </Button>
    </ModalStyled>
  );
};

export default FailedStep;
