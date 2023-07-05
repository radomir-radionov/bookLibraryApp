import dataTestId from 'constants/dataTestId';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookingActions } from 'redux/booking';
import { modalActions } from 'redux/modal';
import { selectModalInfo } from 'redux/modal/selectors';
import { selectUser } from 'redux/user/selectors';
import { Button, ButtonAction } from 'components';
import { Calendar } from 'modules';
import { BUTTON_VARIANTS } from 'types/button';
import createBookingPayload from 'utils/calendar/createBookingPayload';

import { ActionCloseIcon, Container, Header, Modal, NavBox, Title } from './styles';

const Booking = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const book = useSelector(selectModalInfo);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { booking } = book;
  const bookingId = booking?.id;

  const handleBookingClick = () => dispatch(bookingActions.postBooking(createBookingPayload(selectedDate, user)));
  const handleReBookingClick = () =>
    dispatch(bookingActions.putRebooking(createBookingPayload(selectedDate, user, bookingId)));
  const handleCancelBookingClick = () => dispatch(bookingActions.deleteBooking(booking.id));
  const handleCloseModalClick = () => dispatch(modalActions.close());

  useEffect(() => {
    if (booking?.customerId === user?.id && booking?.dateOrder) {
      setSelectedDate(new Date(booking?.dateOrder));
    }
  }, [booking?.customerId, booking?.dateOrder, user?.id]);

  return (
    <Modal data-test-id={dataTestId.BOOKING_MODAL}>
      <Container>
        <Header>
          <Title data-test-id={dataTestId.MODAL_TITLE}>
            {booking?.customerId === user?.id ? 'Изменение даты бронирования' : 'Выбор даты бронирования'}
          </Title>
          <ButtonAction
            className='btnClose'
            value='searching'
            onClick={handleCloseModalClick}
            dataTestId={dataTestId.MODAL_CLOSE_BUTTON}
          >
            <ActionCloseIcon />
          </ButtonAction>
        </Header>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        {!booking && (
          <Button
            type='button'
            onClick={handleBookingClick}
            variant={BUTTON_VARIANTS.LARGE}
            disabled={!selectedDate}
            dataTestId={dataTestId.BOOKING_BUTTON}
          >
            забронировать
          </Button>
        )}
        {booking && booking.dateOrder && booking.customerId === user?.id && (
          <NavBox>
            <Button
              type='button'
              className='booking'
              onClick={handleReBookingClick}
              variant={BUTTON_VARIANTS.LARGE}
              disabled={new Date(booking.dateOrder).getDate() !== selectedDate?.getDate() ? false : true}
              dataTestId={dataTestId.BOOKING_BUTTON}
            >
              забронировать
            </Button>
            <Button
              type='button'
              className='cancelBooking'
              onClick={handleCancelBookingClick}
              variant={BUTTON_VARIANTS.LARGE}
              dataTestId={dataTestId.CANCEL_BOOKING_BUTTON}
            >
              отменить бронь
            </Button>
          </NavBox>
        )}
      </Container>
    </Modal>
  );
};

export default Booking;
