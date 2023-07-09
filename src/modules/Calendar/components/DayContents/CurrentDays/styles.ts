import styled, { css } from 'styled-components';
import { colors, other, typography } from 'styles';

type TDayButton = {
  $variant?: string;
};

export const DayButton = styled.div<TDayButton>`
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

  ${({ $variant }) => {
    switch ($variant) {
      case 'todayIsWeekday':
        return css`
          flex: none;
          order: 0;
          flex-grow: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${colors.OTHER_NEGATIVE_BG};

          span {
            color: rgb(248, 54, 0);
            background: ${colors.OTHER_NEGATIVE_BG};
          }
        `;
      case 'today':
        return css`
          cursor: pointer;

          span {
            color: rgb(248, 54, 0);
          }

          &:hover {
            border: 1px solid ${colors.GREY_BLACK_20};
            background-color: transparent;

            span {
              color: ${colors.MAIN_DARK};
            }
          }
        `;
      case 'selectedDay':
        return css`
          background: ${other.LINEAR_GRADIENT};
          cursor: pointer;

          span {
            color: ${colors.MAIN_WHITE};
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            background-clip: unset;
          }

          border: none;
        `;
      case 'weekday':
        return css`
          flex: none;
          order: 0;
          flex-grow: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${colors.OTHER_NEGATIVE_BG};

          span {
            background: ${colors.OTHER_NEGATIVE_BG};
          }
        `;
      case 'enabled':
        return css`
          color: ${colors.MAIN_DARK};

          &:hover {
            border: 1px solid ${colors.GREY_BLACK_40};
          }
        `;
      default:
        return css``;
    }
  }}
`;
