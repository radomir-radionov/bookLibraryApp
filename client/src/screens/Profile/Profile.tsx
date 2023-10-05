import { Content, ProfileStyled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdditionalInfo, selectUser } from 'redux/user/selectors';
import { Header, Сredentials, BookedBook, UserBook, PurchaseHistory } from 'modules/Profile';
import { useEffect, useState } from 'react';
import { userActions } from 'redux/user/slice.js';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userAdditionalInfo = useSelector(selectAdditionalInfo);
  const [ignore, setIgnore] = useState(false);
  console.log('BookedBook', userAdditionalInfo.booking);
  console.log('UserBook', userAdditionalInfo.delivery);
  useEffect(() => {
    if (user && Object.keys(user).length > 0 && ignore) {
      dispatch(userActions.getUser(user.id));
    }

    return () => setIgnore(true);
  }, [user, ignore]);

  return (
    <ProfileStyled>
      <Content>
        <Header data={user} />
        <Сredentials data={user} />
        <BookedBook data={userAdditionalInfo.booking} />
        <UserBook data={userAdditionalInfo.delivery} />
        <PurchaseHistory data={userAdditionalInfo} />
      </Content>
    </ProfileStyled>
  );
};

export default Profile;
