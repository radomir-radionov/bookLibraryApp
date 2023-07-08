import dataTestId from 'constants/dataTestId';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toastActions } from 'redux/toast';
import { ToastProps } from 'redux/toast/types';

import { getToastIconVariant } from '../toastData';

import { CloseToastIcon, Text, TextBox, ToastStyled } from './styles';

type TProps = {
  data: ToastProps;
};

const Toast = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const { id, type, text } = data;

  const onToastClick = (toastId: string) => () => dispatch(toastActions.deleteToast(toastId));

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(toastActions.deleteToast(id)), 4000);

    return () => clearTimeout(timeoutId);
  }, [dispatch, id]);

  return (
    <ToastStyled $toastVariant={type} data-test-id={dataTestId.ERROR}>
      <TextBox>
        {getToastIconVariant(type)}
        <Text>{text}</Text>
      </TextBox>
      <CloseToastIcon onClick={onToastClick(id)} data-test-id={dataTestId.ALERT_CLOSE} />
    </ToastStyled>
  );
};

export default Toast;
