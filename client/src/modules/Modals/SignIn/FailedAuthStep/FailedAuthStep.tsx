import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectAuthData, selectResponseMessage } from 'redux/auth/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Text, Title } from './styles';

const FailedAuthStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const responseMessage = useSelector(selectResponseMessage);
  const navigate = useNavigate();

  const handleNavigateClick = () => dispatch(authActions.postLogin({ data, navigate }));
  const handleNavigateBackClick = () => dispatch(authActions.setStep(1));

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Вход не выполнен</Title>
      <Text>{responseMessage}</Text>
      <Button type='submit' onClick={handleNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        повторить
      </Button>
      <Button type='submit' onClick={handleNavigateBackClick} variant={BUTTON_VARIANTS.LARGE}>
        назад к входу
      </Button>
    </ModalStyled>
  );
};

export default FailedAuthStep;
