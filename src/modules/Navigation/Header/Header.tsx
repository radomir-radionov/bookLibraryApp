import pageRoutes from 'constants/pageRoutes';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/user/selectors';
import { DefaultAvatarImg, LogoIcon } from 'assets';
import { BurgerMenu, UserMenu } from 'modules';

import {
  Avatar,
  Content,
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
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const clickLogo = () => navigate(pageRoutes.HOME);
  const handleMenuMouseEnter = () => setHovered(true);
  const handleMenuMouseLeave = () => setHovered(false);

  return (
    <HeaderStyled $isHovered={hovered}>
      <Content>
        <LogoBox>
          <BurgerMenu />
          <Logo onClick={clickLogo} src={LogoIcon} alt='Logo' />
          <Title>Библиотека</Title>
        </LogoBox>
        <Profile onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>
          <Greetings>{`Привет, ${user?.firstName}!`}</Greetings>
          {user && user.avatar ? (
            <Avatar img={`${user.avatar}`} />
          ) : (
            <Img src={DefaultAvatarImg} alt='default-avatar' />
          )}
          {hovered && (
            <UserMenuWrapper>
              <UserMenu />
            </UserMenuWrapper>
          )}
        </Profile>
      </Content>
    </HeaderStyled>
  );
};

export default Header;
