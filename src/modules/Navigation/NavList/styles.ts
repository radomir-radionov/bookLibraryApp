import { ActionRatingDown_Icon, ActionRatingUp_Icon, ActionSearching_Icon, List_Icon, Tiles_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const NavListStyled = styled.div`
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
