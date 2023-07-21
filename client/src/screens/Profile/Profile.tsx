import { Content, ProfileStyled } from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import { Header, Сredentials, BookedBook, UserBook, PurchaseHistory } from 'modules/Profile';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <ProfileStyled>
      <Content>
        <Header data={user} />
        <Сredentials data={user} />
        <BookedBook data={user} />
        <UserBook data={user} />
        <PurchaseHistory data={user} />
      </Content>
    </ProfileStyled>
  );
};

export default Profile;
