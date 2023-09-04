import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { bookingActions } from 'redux/booking';
import { modalActions } from 'redux/modal';
import { selectUserDataId } from 'redux/user/selectors';
import { MODAL_TYPES } from 'types/modal';
import { formatDateButton } from 'utils/formatDate';

import { ButtonStyled } from './styles';
import { TBook, TBookDetailed } from 'types/book.js';

type TProps = {
  book: TBook | TBookDetailed;
};

const ButtonBooking = ({ book }: TProps) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserDataId);
  const { id, booking, delivery } = book;

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(modalActions.open({ type: MODAL_TYPES.BOOKING, modalInfo: book }));
    dispatch(bookingActions.setBookId(id));
  };

  switch (true) {
    case booking?.customerId === userId:
      return (
        <ButtonStyled
          type='button'
          onClick={onButtonClick}
          $buttonValue='currentCustomer'
          data-test-id={dataTestId.BOOKING_BUTTON}
        >
          забронирована
        </ButtonStyled>
      );
    case booking?.order && booking?.customerId !== userId:
      return (
        <ButtonStyled
          type='button'
          onClick={onButtonClick}
          $buttonValue='anotherCustomer'
          disabled={true}
          data-test-id={dataTestId.BOOKING_BUTTON}
        >
          забронирована
        </ButtonStyled>
      );
    case !!delivery:
      return (
        <ButtonStyled
          type='button'
          onClick={onButtonClick}
          $buttonValue='onHands'
          disabled={true}
          data-test-id={dataTestId.BOOKING_BUTTON}
        >
          {`Занята до ${formatDateButton(delivery?.dateHandedTo)}`}
        </ButtonStyled>
      );
    default:
      return (
        <ButtonStyled
          type='button'
          onClick={onButtonClick}
          $buttonValue='noBooking'
          data-test-id={dataTestId.BOOKING_BUTTON}
        >
          забронировать
        </ButtonStyled>
      );
  }
};

export default ButtonBooking;
