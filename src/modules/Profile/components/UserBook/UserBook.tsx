import hintText from 'constants/hintText';

import { useSelector } from 'react-redux';
import { selectUserDelivery } from 'redux/user/selectors';
import { ExpiredMask } from 'components';
import { BookProfile } from 'modules';
import { EmptyData } from 'modules/Profile/components';

import { AssistiveText, BookWrapper, Header, Title, UserBookStyled } from './styles';

const UserBook = () => {
  const delivery = useSelector(selectUserDelivery);
  const isExpired = new Date().getTime() >= (delivery?.dateHandedTo ? new Date(delivery.dateHandedTo).getTime() : 0);

  return (
    <UserBookStyled>
      <Header>
        <Title>Книга которую взяли</Title>
        <AssistiveText>Здесь можете просмотреть информацию о книге и узнать сроки возврата</AssistiveText>
      </Header>
      {delivery && delivery.id ? (
        <BookWrapper>
          {isExpired && (
            <ExpiredMask title={hintText.EXPIRED_DEADLINE_TITLE} subtitle={hintText.EXPIRED_DEADLINE__SUBTITLE} />
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
