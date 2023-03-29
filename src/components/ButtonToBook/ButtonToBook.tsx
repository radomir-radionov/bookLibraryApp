import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { bookingActions } from 'redux/booking';
import { modalActions } from 'redux/modal';
import { selectUserDataId } from 'redux/user/selectors';
import { MODAL_TYPES } from 'types/modal';
import { formatDateButton } from 'utils/formatDate';

import { ButtonStyled } from './styles';
import { IButtonToBookProps } from './types';

const ButtonToBook = ({ book, booking, delivery }: IButtonToBookProps) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserDataId);
  const { id } = book;

  const handleOpenModalClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(modalActions.open({ type: MODAL_TYPES.BOOKING, modalInfo: book }));
    dispatch(bookingActions.setBookId(id));
  };

  switch (true) {
    case booking?.customerId === userId:
      return (
        <ButtonStyled
          type='button'
          onClick={handleOpenModalClick}
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
          onClick={handleOpenModalClick}
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
          onClick={handleOpenModalClick}
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
          onClick={handleOpenModalClick}
          $buttonValue='noBooking'
          data-test-id={dataTestId.BOOKING_BUTTON}
        >
          забронировать
        </ButtonStyled>
      );
  }
};

export default ButtonToBook;
