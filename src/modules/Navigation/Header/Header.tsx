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
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const navigate = useNavigate();

  const onLogoClick = () => navigate(pageRoutes.HOME);
  const onMenuMouseEnter = () => setIsHeaderHovered(true);
  const onMenuMouseLeave = () => setIsHeaderHovered(false);

  return (
    <HeaderStyled $isHovered={isHeaderHovered}>
      <Content>
        <LogoBox>
          <BurgerMenu />
          <Logo onClick={onLogoClick} src={LogoIcon} alt='Logo' />
          <Title>Библиотека</Title>
        </LogoBox>
        <Profile onMouseEnter={onMenuMouseEnter} onMouseLeave={onMenuMouseLeave}>
          <Greetings>{`Привет, ${user?.firstName}!`}</Greetings>
          {user && user.avatar ? (
            <Avatar img={`${user.avatar}`} />
          ) : (
            <Img src={DefaultAvatarImg} alt='default-avatar' />
          )}
        </Profile>
        {isHeaderHovered && (
          <UserMenuWrapper>
            <UserMenu />
          </UserMenuWrapper>
        )}
      </Content>
    </HeaderStyled>
  );
};

export default Header;
