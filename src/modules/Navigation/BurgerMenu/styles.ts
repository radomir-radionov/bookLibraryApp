import { CloseMenu_Icon, HumburgerMenu_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, other } from 'styles';

type TBurgerNav = {
  $visible: boolean;
};

export const BurgerMenuStyled = styled.div`
  display: none;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptop}) {
    position: relative;
    display: block;
  }
`;

export const BurgerNav = styled.div<TBurgerNav>`
  position: absolute;
  z-index: 999;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  width: 502px;
  margin-top: 18px;
  background: ${colors.GREY_BLACK_5};
  box-shadow: ${other.MAIN_SHADOW};
  border-radius: 10px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tabletM}) {
    width: 280px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  padding: 32px 32px 52px 32px;

  @media (max-width: ${device.tabletM}) {
    padding: 32px 16px 52px 16px;
  }
`;

export const HumburgerIcon = styled(HumburgerMenu_Icon)`
  display: none;
  cursor: pointer;

  @media (max-width: ${device.laptop}) {
    display: initial;
  }
`;

export const CloseMenuIcon = styled(CloseMenu_Icon)`
  display: none;
  cursor: pointer;

  @media (max-width: ${device.laptop}) {
    display: initial;
  }
`;
