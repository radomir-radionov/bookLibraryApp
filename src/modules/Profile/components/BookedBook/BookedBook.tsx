import hintText from 'constants/hintText';

import { useSelector } from 'react-redux';
import { selectUserBooking } from 'redux/user/selectors';
import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile/components';

import { AssistiveText, BookedBookStyled, BookWrapper, Header, Title } from './styles';

const BookedBook = () => {
  const booking = useSelector(selectUserBooking);

  const isExpired =
    new Date().getTime() >= new Date(booking?.dateOrder || '').getTime() &&
    new Date().getDate() !== new Date(booking?.dateOrder || '').getDate();

  return (
    <BookedBookStyled>
      <Header>
        <Title>Забронированная книга</Title>
        <AssistiveText>Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь</AssistiveText>
      </Header>
      {booking && booking.id ? (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_BOOKING_TITLE} subtitle={hintText.EXPIRED_BOOKING_SUBTITLE} />
          )}
          <BookProfile data={booking} />
        </BookWrapper>
      ) : (
        <EmptyData text={hintText.BOOKED_BOOK_TEXT} />
      )}
    </BookedBookStyled>
  );
};

export default BookedBook;
