import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { forgotPwdActions } from 'redux/forgotPwd';
import { selectResetPwdData } from 'redux/forgotPwd/selectors';
import { Button } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { ModalStyled, Text, Title } from './styles';

const FailedPwdStep = () => {
  const dispatch = useDispatch();
  const resetPwdData = useSelector(selectResetPwdData);

  const handleBtnRepeatClick = () => dispatch(forgotPwdActions.postResetPwd(resetPwdData));
  const handleBtnBackClick = () => dispatch(forgotPwdActions.setDefiniteStep(3));

  return (
    <ModalStyled data-test-id={dataTestId.STATUS_BLOCK}>
      <Title>Данные не сохранились</Title>
      <Text>Что-то пошло не так. Попробуйте ещё раз!</Text>
      <Button type='submit' onClick={handleBtnRepeatClick} variant={BUTTON_VARIANTS.LARGE}>
        повторить
      </Button>
      <Button type='submit' onClick={handleBtnBackClick} variant={BUTTON_VARIANTS.LARGE}>
        вернуться назад
      </Button>
    </ModalStyled>
  );
};

export default FailedPwdStep;
