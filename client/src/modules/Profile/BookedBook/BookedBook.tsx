import hintText from 'constants/hintText';

import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile';

import { Text, BookedBookStyled, BookWrapper, Header, Title } from './styles';
import { TExtendedUserInfo } from 'types/user';

type TProps = {
  data: TExtendedUserInfo;
};

const BookedBook = ({ data }: TProps) => {
  const { booking } = data;

  const isExpired =
    new Date().getTime() >= new Date(booking?.dateOrder || '').getTime() &&
    new Date().getDate() !== new Date(booking?.dateOrder || '').getDate();

  return (
    <BookedBookStyled>
      <Header>
        <Title>Забронированная книга</Title>
        <Text>Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь</Text>
      </Header>
      {booking?.id ? (
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
