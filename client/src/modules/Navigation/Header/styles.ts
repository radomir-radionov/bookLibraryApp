import styled from 'styled-components';
import { colors, device, other, typography } from 'styles';

type THeaderStyled = {
  $isHovered: boolean;
};

type TAvatar = {
  img: string;
};

export const HeaderStyled = styled.header<THeaderStyled>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0 15px;
  transition: all 0.2s ease-out;
  box-shadow: ${({ $isHovered }) =>
    $isHovered ? '-4px 4px 4px 0px rgba(54, 54, 54, 0.05), 4px 4px 4px 0px rgba(54, 54, 54, 0.05);' : 'none'};

  button {
    margin-right: 10px;
  }

  @media (max-width: ${device.laptopM}) {
    padding: 32px 64px 22px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 16px 16px 24px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
`;

export const HumburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${device.laptop}) {
    display: initial;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;

  @media (max-width: ${device.laptop}) {
    gap: 26px;
  }
`;

export const Title = styled.h3`
  ${typography.desktop.H3};
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tabletM}) {
    ${typography.mobile.H3};
  }
`;

export const Logo = styled.img`
  cursor: pointer;

  @media (max-width: ${device.laptop}) {
    display: none;
  }
`;

export const UserMenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 32px;
  right: 0px;
  padding: 40px;
  padding-right: 0;

  @media (max-width: ${device.laptopM}) {
    top: 40px;
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  ul {
    display: flex;
    align-items: end;
    gap: 32px;
    width: 270px;
    padding: 32px 24px;
    border-top: 0;
    border-radius: 0px 0px 10px 10px;
    background-color: ${colors.MAIN_WHITE};
    box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
    transition: all 0.2s ease-out;
  }

  @media (max-width: ${device.laptop}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  filter: ${other.MAIN_FILTER};
`;

export const Greetings = styled.p`
  margin-right: 16px;
  ${typography.desktop.SUBTITLE_SMALL};
`;

export const Avatar = styled.div<TAvatar>`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-image: ${({ img }) => (img ? `url(${img})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  filter: ${other.MAIN_FILTER};
`;
