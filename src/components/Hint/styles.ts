import styled from 'styled-components';
import { colors, typography } from 'styles';

type HintStyledProps = {
  $colored: boolean;
  $clip?: boolean;
};

export const HintStyled = styled.small<HintStyledProps>`
  height: 33px !important;
  padding-left: 12px;
  ${typography.desktop.INFO_LARGE};
  font-weight: 500 !important;
  color: ${({ $colored }) => ($colored ? colors.OTHER_NEGATIVE : colors.GREY_BLACK_40)};
`;
