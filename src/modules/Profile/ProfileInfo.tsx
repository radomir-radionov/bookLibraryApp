import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';

import { BookedBook, Header, PurchaseHistory, UserBook, Сredentials } from './components';

const ProfileInfo = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {user && (
        <>
          <Header data={user} />
          <Сredentials userData={user} />
        </>
      )}
      <BookedBook />
      <UserBook />
      {user && <PurchaseHistory data={user} />}
    </>
  );
};

export default ProfileInfo;
