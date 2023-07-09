import { NavLink } from 'react-router-dom';
import { Chevron_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, formalization, other, typography } from 'styles';

type TNav = {
  $visible: boolean;
};

type TNavItem = {
  $bookPath?: string;
  $isListOpen?: boolean;
  $categoryParam?: string;
};

type TableName = {
  $bookPath?: string;
  $isListOpen: boolean;
};

type TIcon = {
  $categoryParam: string;
};

export const NavStyled = styled.nav<TNav>`
  width: 280px;

  @media (max-width: ${device.laptop}) {
    display: ${({ $visible }) => ($visible ? 'initial' : 'none')};
  }
`;

export const Line = styled.hr`
  position: absolute;
  z-index: 999;
  margin: 0;
  border: none;
`;

export const NavList = styled.ul``;

export const NavItem = styled.li<TNavItem>`
  display: flex;
  justify-content: space-between;
  width: 255px;
  margin-bottom: 42px;
  ${typography.desktop.H5};
  cursor: pointer;

  &:first-child {
    margin-bottom: ${({ $isListOpen }) => ($isListOpen ? 0 : '42px')};

    svg {
      rotate: ${({ $isListOpen }) => ($isListOpen ? '180deg' : 0)};
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $categoryParam }) =>
    $categoryParam &&
    `
      padding-bottom: 8px;
      border-bottom: 1px solid transparent;
      border-image: ${other.LINEAR_GRADIENT};
      border-image-slice: 1;
    }`}

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;

export const Name = styled.span<TableName>`
  ${({ $bookPath }) => $bookPath === 'books' && formalization.HOVER}
  ${({ $isListOpen }) => $isListOpen && formalization.HOVER}
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

export const ChevronIcon = styled(Chevron_Icon)<TIcon>`
  display: ${({ $categoryParam }) => ($categoryParam ? 'inline-block' : 'none')};
`;
