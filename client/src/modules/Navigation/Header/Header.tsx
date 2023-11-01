import pageRoutes from 'constants/pageRoutes';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/user/selectors';
import { DefaultAvatarImg, LogoIcon } from 'assets';
import { BurgerMenu, UserMenu } from 'modules';
import base64ToBlobAndUrl from 'utils/base64ToBlobAndUrl';

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

  const blobUrl = user.avatar && base64ToBlobAndUrl(user.avatar.data, 'png');

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
          {user && user.avatar ? <Avatar img={blobUrl || ''} /> : <Img src={DefaultAvatarImg} alt='default-avatar' />}
          {isHeaderHovered && (
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
