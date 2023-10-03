import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Paragraph, Title } from './styles';
import { useDispatch } from 'react-redux';
import { forgotPwdActions } from 'redux/forgotPwd/slice.js';

const SuccessfulStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBtnSubmitClick = () => {
    dispatch(forgotPwdActions.setDefiniteStep(1));
    navigate(pageRoutes.AUTH);
  };

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Новые данные сохранены</Title>
      <Paragraph>
        Зайдите в личный кабинет, <br />
        используя свои email и новый пароль
      </Paragraph>
      <Button type='submit' onClick={onBtnSubmitClick} variant={BUTTON_VARIANTS.LARGE}>
        вход
      </Button>
    </ModalStyled>
  );
};

export default SuccessfulStep;
