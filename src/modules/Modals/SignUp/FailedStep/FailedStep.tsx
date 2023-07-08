import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { registrationActions } from 'redux/registration';
import { selectResponseMessage } from 'redux/registration/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Text, Title } from './styles';

const FailedStep = () => {
  const dispatch = useDispatch();
  const responseMessage = useSelector(selectResponseMessage);

  const onBtnNavigateClick = () => dispatch(registrationActions.setDefiniteStep(1));

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Данные не сохранились</Title>
      <Text>{responseMessage}</Text>
      <Button type='submit' onClick={onBtnNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        повторить
      </Button>
    </ModalStyled>
  );
};

export default FailedStep;
