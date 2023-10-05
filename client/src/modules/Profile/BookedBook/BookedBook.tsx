import hintText from 'constants/hintText';
import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile';
import { Text, BookedBookStyled, BookWrapper, Header, Title } from './styles';
import { TUserBooking } from 'types/user';
import { bookingActions } from 'redux/booking/slice.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

type TProps = {
  data?: TUserBooking; // Make data optional to handle cases where it's undefined
};

const BookedBook = ({ data }: TProps) => {
  const dispatch = useDispatch();

  const createdAt = data?.createdAt || '';
  const book = data?.book || {};

  const currentDate = new Date().getDate();
  const createdAtDate = new Date(createdAt).getDate();
  const isExpired = currentDate > createdAtDate;
  const isExpiredBookingReadyToDelete = currentDate > createdAtDate + 1;

  useEffect(() => {
    if (data && isExpiredBookingReadyToDelete) {
      dispatch(bookingActions.deleteExpiredBookingReq({ id: data.id }));
    }
  }, [data, isExpiredBookingReadyToDelete, dispatch]);

  return (
    <BookedBookStyled>
      <Header>
        <Title>Забронированная книга</Title>
        <Text>Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь</Text>
      </Header>
      {data ? (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_BOOKING_TITLE} subtitle={hintText.EXPIRED_BOOKING_SUBTITLE} />
          )}
          <BookProfile data={book} />
        </BookWrapper>
      ) : (
        <EmptyData text={hintText.BOOKED_BOOK_TEXT} />
      )}
    </BookedBookStyled>
  );
};

export default BookedBook;
