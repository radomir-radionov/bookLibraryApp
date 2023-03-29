import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectAuthData, selectResponseMessage } from 'redux/auth/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';

const FailedAuthStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const responseMessage = useSelector(selectResponseMessage);
  const navigate = useNavigate();

  const handleNavigateClick = () => dispatch(authActions.setAuthData({ data, navigate }));

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Вход не выполнен</Title>
      <Paragraph>{responseMessage}</Paragraph>
      <Button type='submit' onClick={handleNavigateClick} variant={BUTTON_VARIANTS.LARGE}>
        повторить
      </Button>
    </ModalStyled>
  );
};

export default FailedAuthStep;
