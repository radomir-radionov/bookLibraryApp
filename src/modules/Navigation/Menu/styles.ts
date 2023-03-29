import { NavLink } from 'react-router-dom';
import { Chevron_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, formalization, other, typography } from 'styles';

type MenuProps = {
  $visible: boolean;
};

type MenuItemProps = {
  $bookPath?: string;
  $isListOpen?: boolean;
  $categoryParam?: string;
};

type NameProps = {
  $bookPath?: string;
  $isListOpen: boolean;
};

type IconProps = {
  $categoryParam: string;
};

export const MenuStyled = styled.div<MenuProps>`
  width: 279px;

  @media (max-width: ${device.laptop}) {
    display: ${({ $visible }) => {
      return $visible ? 'initial' : 'none';
    }};
  }
`;

export const Line = styled.hr`
  position: absolute;
  z-index: 999;
  margin: 0;
  border: none;
`;

export const MenuList = styled.menu``;

export const MenuItem = styled.li<MenuItemProps>`
  display: flex;
  justify-content: space-between;
  width: 255px;
  margin-bottom: 42px;
  ${typography.desktop.H5};
  cursor: pointer;

  &:first-child {
    margin-bottom: ${({ $isListOpen }) => {
      return $isListOpen ? 0 : '42px';
    }};

    svg {
      rotate: ${({ $isListOpen }) => {
        return $isListOpen ? '180deg' : 0;
      }};
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $categoryParam }) => {
    return $categoryParam
      ? ` 
      padding-bottom: 8px;
      border-bottom: 1px solid transparent;
      border-image: ${other.LINEAR_GRADIENT};
      border-image-slice: 1;
    }`
      : null;
  }}

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;

export const Name = styled.span<NameProps>`
  ${({ $bookPath }) => {
    return $bookPath === 'books' ? formalization.HOVER : null;
  }}
  ${({ $isListOpen }) => {
    return $isListOpen ? formalization.HOVER : null;
  }}
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 0.3s;

  &.active {
    ${formalization.HOVER}

    ${Line} {
      display: block;
      width: 255px;
      margin-top: 8px;
      ${typography.desktop.H5}
      ${formalization.HOVER}
      border-bottom: 1px solid transparent;
      border-image: ${other.LINEAR_GRADIENT};
      border-image-slice: 1;
    }
  }
`;

export const ChevronIcon = styled(Chevron_Icon)<IconProps>`
  display: ${({ $categoryParam }) => {
    return $categoryParam ? 'inline-block' : 'none';
  }};
`;
