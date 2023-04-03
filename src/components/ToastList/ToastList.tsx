import { useSelector } from 'react-redux';
import { selectToasts } from 'redux/toast/selectors';
import { Toast } from 'components';

import { ToastListStyled } from './styles';

const ToastList = () => {
  const toasts = useSelector(selectToasts);

  return (
    <>
      {!!toasts.length && (
        <ToastListStyled>
          {toasts.map((data) => (
            <Toast key={data.id} data={data} />
          ))}
        </ToastListStyled>
      )}
    </>
  );
};

export default ToastList;
