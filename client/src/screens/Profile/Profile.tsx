import { Content, ProfileStyled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdditionalInfo, selectUser } from 'redux/user/selectors';
import { Header, Сredentials, BookedBook, HandedBook, HistoryBooksList } from 'modules/Profile';
import { useEffect, useState } from 'react';
import { userActions } from 'redux/user/slice.js';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { booking, delivery, histories } = useSelector(selectAdditionalInfo);
  const [ignore, setIgnore] = useState(false);

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
        <BookedBook data={booking} />
        <HandedBook data={delivery} />
        <HistoryBooksList data={histories} />
      </Content>
    </ProfileStyled>
  );
};

export default Profile;
