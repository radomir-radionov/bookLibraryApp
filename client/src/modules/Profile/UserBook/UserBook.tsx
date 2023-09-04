import hintText from 'constants/hintText';

import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile';

import { Text, BookWrapper, Header, Title, UserBookStyled } from './styles';
import { TUser } from 'types/user';

type TProps = {
  data: TUser;
};

const UserBook = ({ data }: TProps) => {
  const { delivery } = data;
  const isExpired = new Date().getTime() >= (delivery?.dateHandedTo ? new Date(delivery.dateHandedTo).getTime() : 0);

  return (
    <UserBookStyled>
      <Header>
        <Title>Книга которую взяли</Title>
        <Text>Здесь можете просмотреть информацию о книге и узнать сроки возврата</Text>
      </Header>
      {delivery && delivery.id ? (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_DEADLINE_TITLE} subtitle={hintText.EXPIRED_DEADLINE_SUBTITLE} />
          )}
          <BookProfile data={delivery} />
        </BookWrapper>
      ) : (
        <EmptyData text={hintText.USER_BOOK_TEXT} />
      )}
    </UserBookStyled>
  );
};

export default UserBook;
