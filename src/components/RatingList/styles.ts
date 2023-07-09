import { EmptyStar_Icon, Star_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type TRatingList = {
  $visible: string;
};

export const RatingListStyled = styled.div<TRatingList>`
  display: ${({ $visible }) => ($visible === 'tiles' ? 'flex' : $visible === 'list' ? 'flex' : 'none')};
  align-items: center;
  margin: 0;
`;

export const RatingItem = styled.div``;

export const Text = styled.span`
  ${typography.desktop.BODY_SMALL};
  line-height: 28px;
  color: ${colors.GREY_BLACK_40};
`;

export const EmptyStarIcon = styled(EmptyStar_Icon)`
  @media (max-width: ${device.tablet}) {
    width: 25px;
    height: 25px;
  }
`;

export const StarIcon = styled(Star_Icon)`
  @media (max-width: ${device.tablet}) {
    width: 25px;
    height: 25px;
  }
`;
