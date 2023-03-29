import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type AvatarProps = {
  img: string;
};

export const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  padding: 40px 0 52px;
  transition: all 0.2s ease-out;

  button {
    margin-right: 10px;
  }

  @media (max-width: ${device.laptopM}) {
    justify-content: space-between;
    padding: 32px 0 48px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 16px 0 32px;
  }
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
  flex: 1;
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
  top: 80px;
  right: 0px;
  padding: 40px;
  padding-right: 0;

  @media (max-width: ${device.laptopM}) {
    padding-right: 64px;
  }
`;

export const Profile = styled.div`
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

  @media (max-width: ${device.tabletL}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));
`;

export const Greetings = styled.p`
  margin-right: 16px;
  ${typography.desktop.SUBTITLE_SMALL};
`;

export const Avatar = styled.div<AvatarProps>`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-image: ${({ img }) => (img ? `url(${img})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));
`;
