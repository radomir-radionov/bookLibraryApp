import serverEndpoints from 'constants/apiEndpoints';
import pageRoutes from 'constants/pageRoutes';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/user/selectors';
import { DefaultAvatarImg, LogoIcon } from 'assets';
import { BurgerMenu, UserMenu } from 'modules';

import {
  Avatar,
  Container,
  Greetings,
  HeaderStyled,
  Img,
  Logo,
  LogoBox,
  Profile,
  Title,
  UserMenuWrapper,
} from './styles';

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const clickLogo = () => navigate(pageRoutes.HOME);
  const handleMenuMouseEnter = () => setHovered(true);
  const handleMenuMouseLeave = () => setHovered(false);

  return (
    <HeaderStyled>
      <Container>
        <LogoBox>
          <BurgerMenu />
          <Logo onClick={clickLogo} src={LogoIcon} alt='Logo' />
          <Title>Библиотека</Title>
        </LogoBox>
        <Profile onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>
          <Greetings>{`Привет, ${user?.firstName}!`}</Greetings>
          {user && user.avatar ? (
            <Avatar img={`${serverEndpoints.HOST}${user.avatar}`} />
          ) : (
            <Img src={DefaultAvatarImg} alt='default-avatar' />
          )}
          {hovered && (
            <UserMenuWrapper>
              <UserMenu />
            </UserMenuWrapper>
          )}
        </Profile>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
