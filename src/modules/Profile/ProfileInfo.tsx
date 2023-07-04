import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';

import { BookedBook, Header, PurchaseHistory, UserBook, Сredentials } from './components';
import { ProfileInfoStyled } from './styles';

const ProfileInfo = () => {
  const user = useSelector(selectUser);

  return (
    <ProfileInfoStyled>
      {user && (
        <>
          <Header data={user} />
          <Сredentials userData={user} />
        </>
      )}
      <BookedBook />
      <UserBook />
      {user && <PurchaseHistory data={user} />}
    </ProfileInfoStyled>
  );
};

export default ProfileInfo;
