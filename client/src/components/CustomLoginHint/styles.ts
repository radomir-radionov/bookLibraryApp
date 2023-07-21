import styled from 'styled-components';
import { colors, typography } from 'styles';

type TErrorText = {
  $isValid: boolean;
};

export const HintStyled = styled.small`
  height: 33px;
  padding-left: 12px;
  ${typography.desktop.INFO_LARGE};
  color: ${colors.GREY_BLACK_40};
`;

export const ErrorText = styled.span<TErrorText>`
  color: ${({ $isValid }) => ($isValid ? colors.OTHER_NEGATIVE : colors.GREY_BLACK_40)};
`;
