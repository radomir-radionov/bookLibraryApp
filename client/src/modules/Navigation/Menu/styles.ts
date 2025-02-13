import {
  ActionRatingDown_Icon,
  ActionRatingUp_Icon,
  ActionSearching_Icon,
  List_Icon,
  Tiles_Icon,
  Chat_Icon,
} from 'assets';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, device, other, typography } from 'styles';

export const MenuStyled = styled.div`
  display: flex;

  div:nth-child(2) {
    flex: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex: 1 auto;
  gap: 16px;
  height: 38px;

  &:nth-child(2) {
    justify-content: end;
  }

  @media (min-width: ${device.tablet}) {
    .visible {
      display: none;
    }
  }
`;

export const Name = styled.p`
  margin-left: 8px;
  ${typography.desktop.BODY_SMALL};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.tablet}) {
    display: none;
  }
`;

export const Img = styled.img``;

export const ActionRatingUpIcon = styled(ActionRatingUp_Icon)``;

export const ActionRatingDownIcon = styled(ActionRatingDown_Icon)``;

export const ActionSearchingIcon = styled(ActionSearching_Icon)``;

export const ListIcon = styled(List_Icon)``;

export const TilesIcon = styled(Tiles_Icon)``;

// unused icon
export const ChatIcon = styled(Chat_Icon)``;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  border: 0;
  border-radius: 20px;
  background: ${colors.MAIN_WHITE};

  path {
    fill: ${colors.GREY_BLACK_40};
  }

  filter: ${other.MAIN_FILTER};
  transition: all 0.1s ease-out;

  &:nth-child(2) {
    margin-right: 0;
  }

  &:hover {
    filter: ${other.FILTER_СRYSTAL};
  }

  &:active {
    box-shadow: none;
    filter: ${other.FILTER_LIGHT};
  }

  @media (max-width: ${device.tablet}) {
    display: flex;
    width: 38px;
  }
`;
