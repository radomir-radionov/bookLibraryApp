import { CloseMenu_Icon, HumburgerMenu_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device } from 'styles';

type BurgerNavProps = {
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

export const BurgerNav = styled.div<BurgerNavProps>`
  position: absolute;
  z-index: 999;
  display: ${({ $visible }) => {
    return $visible ? 'block' : 'none';
  }};
  width: 502px;
  margin-top: 18px;
  background: ${colors.GREY_BLACK_5};
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
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
