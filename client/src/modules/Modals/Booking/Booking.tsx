import dataTestId from 'constants/dataTestId';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookingActions } from 'redux/booking';
import { modalActions } from 'redux/modal';
import { selectModalInfo } from 'redux/modal/selectors';
import { selectUser } from 'redux/user/selectors';
import { Button, ButtonFiltering } from 'components';
import { Calendar } from 'modules';
import { BUTTON_VARIANTS } from 'types/button';
import prepareBookingData from 'utils/calendar/prepareBookingData';

import { ActionCloseIcon, Container, Header, Modal, NavBox, Title } from './styles';

const Booking = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { onlyBookData, book } = useSelector(selectModalInfo);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { id, booking } = book;
  const bookingId = booking?.id;

  const handleBtnBookingClick = () => {
    const preparedBookingData = prepareBookingData(selectedDate, user, id);
    dispatch(bookingActions.createBookingReq({ onlyBookData, preparedBookingData }));
  };

  const handleBtnReBookingClick = () => {
    const preparedBookingData = prepareBookingData(selectedDate, user, id, bookingId);
    dispatch(bookingActions.updateBookingReq({ onlyBookData, preparedBookingData }));
  };

  const handleBtnCancelClick = () => dispatch(bookingActions.deleteBookingReq({ id, onlyBookData, bookingId }));
  const handleBtnCloseClick = () => dispatch(modalActions.close());

  useEffect(() => {
    if (booking?.userId === user.id && booking?.createdAt) {
      setSelectedDate(new Date(booking?.createdAt));
    }
  }, [booking?.userId, booking?.createdAt, user.id]);

  return (
    <Modal data-test-id={dataTestId.BOOKING_MODAL}>
      <Container>
        <Header>
          <Title data-test-id={dataTestId.MODAL_TITLE}>
            {booking?.userId === user.id ? 'Изменение даты бронирования' : 'Выбор даты бронирования'}
          </Title>
          <ButtonFiltering
            className='btnClose'
            onClick={handleBtnCloseClick}
            dataTestId={dataTestId.MODAL_CLOSE_BUTTON}
          >
            <ActionCloseIcon />
          </ButtonFiltering>
        </Header>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        {!booking && (
          <Button
            type='button'
            onClick={handleBtnBookingClick}
            variant={BUTTON_VARIANTS.LARGE}
            disabled={!selectedDate}
            dataTestId={dataTestId.BOOKING_BUTTON}
          >
            забронировать
          </Button>
        )}
        {booking?.createdAt && booking?.userId === user.id && (
          <NavBox>
            <Button
              type='button'
              className='booking'
              onClick={handleBtnReBookingClick}
              variant={BUTTON_VARIANTS.LARGE}
              disabled={new Date(booking?.createdAt).getDate() !== selectedDate?.getDate() ? false : true}
              dataTestId={dataTestId.BOOKING_BUTTON}
            >
              забронировать
            </Button>
            <Button
              type='button'
              className='cancelBooking'
              onClick={handleBtnCancelClick}
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
