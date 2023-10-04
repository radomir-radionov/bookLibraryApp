import hintText from 'constants/hintText';

import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile';

import { Text, BookedBookStyled, BookWrapper, Header, Title } from './styles';
import { TUserBooking } from 'types/user';

type TProps = {
  data: TUserBooking;
};

const BookedBook = ({ data }: TProps) => {
  const addContent = (data: TUserBooking) => {
    if (data) {
      const { createdAt, book } = data;
      const isExpired =
        new Date().getTime() >= new Date(createdAt || '').getTime() &&
        new Date().getDate() !== new Date(createdAt || '').getDate();

      return (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_BOOKING_TITLE} subtitle={hintText.EXPIRED_BOOKING_SUBTITLE} />
          )}
          <BookProfile data={book} />
        </BookWrapper>
      );
    }
    return <EmptyData text={hintText.BOOKED_BOOK_TEXT} />;
  };

  return (
    <BookedBookStyled>
      <Header>
        <Title>Забронированная книга</Title>
        <Text>Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь</Text>
      </Header>
      {addContent(data)}
    </BookedBookStyled>
  );
};

export default BookedBook;
