import hintText from 'constants/hintText';

import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile';

import { Text, BookWrapper, Header, Title, HandedBookStyled } from './styles';
import { TUserDelivery } from 'types/user';

type TProps = {
  data: TUserDelivery;
};

const HandedBook = ({ data }: TProps) => {
  const { book, dateHandedTo } = data ?? {};

  const isExpired = new Date().getTime() >= (dateHandedTo ? new Date(dateHandedTo).getTime() : 0);

  return (
    <HandedBookStyled>
      <Header>
        <Title>Книга которую взяли</Title>
        <Text>Здесь можете просмотреть информацию о книге и узнать сроки возврата</Text>
      </Header>
      {book ? (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_DEADLINE_TITLE} subtitle={hintText.EXPIRED_DEADLINE_SUBTITLE} />
          )}
          <BookProfile type='delivery' data={book} dateHandedTo={dateHandedTo} />
        </BookWrapper>
      ) : (
        <EmptyData text={hintText.USER_BOOK_TEXT} />
      )}
    </HandedBookStyled>
  );
};

export default HandedBook;
