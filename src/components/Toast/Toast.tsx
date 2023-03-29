import dataTestId from 'constants/dataTestId';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toastActions } from 'redux/toast';
import { selectToastData } from 'redux/toast/selectors';

import { AlertBox, AlertText, CloseToastIcon, ToastStyled, Wrapper } from './styles';
import { getToastIconVariant } from './toastData';

const Toast = () => {
  const dispatch = useDispatch();
  const { type, text } = useSelector(selectToastData);

  const handleCloseToastClick = () => dispatch(toastActions.removeAlert());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      !!type && dispatch(toastActions.removeAlert());
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, text, type]);

  return (
    <>
      {type && (
        <Wrapper>
          <ToastStyled $toastVariant={type} data-test-id={dataTestId.ERROR}>
            <AlertBox>
              {getToastIconVariant(type)}
              <AlertText>{text}</AlertText>
            </AlertBox>
            <CloseToastIcon onClick={handleCloseToastClick} data-test-id={dataTestId.ALERT_CLOSE} />
          </ToastStyled>
        </Wrapper>
      )}
    </>
  );
};

export default Toast;
