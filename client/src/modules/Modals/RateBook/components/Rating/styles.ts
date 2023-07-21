import { EmptyStar_Icon, Star_Icon } from 'assets';
import styled from 'styled-components';
import { device, typography } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 258px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h5`
  ${typography.desktop.SUBTITLE_LARGE};
`;

export const EmptyStarIcon = styled(EmptyStar_Icon)`
  width: 45px;
  height: 42px;

  @media (max-width: ${device.tablet}) {
    width: 25px;
    height: 25px;
  }
`;

export const StarIcon = styled(Star_Icon)`
  width: 45px;
  height: 42px;

  @media (max-width: ${device.tablet}) {
    width: 25px;
    height: 25px;
  }
`;

export const RatingStyled = styled.div`
  display: flex;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
