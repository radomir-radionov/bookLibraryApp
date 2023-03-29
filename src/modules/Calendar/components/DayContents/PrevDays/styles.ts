import styled from 'styled-components';
import { colors, typography } from 'styles';

export const DayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${typography.desktop.INFO_SMALL};
  color: ${colors.GREY_BLACK_40};
  background: ${colors.MAIN_WHITE};
  cursor: default;
  user-select: none;

  p {
    span {
      background: rgba(0, 0, 0, 0);
    }
  }
`;
