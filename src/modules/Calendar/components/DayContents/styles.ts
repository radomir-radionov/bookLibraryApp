import styled from 'styled-components';
import { other, typography } from 'styles';

export const DayContentsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-template-rows: repeat(6, 32px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  ${typography.desktop.INFO_LARGE};
  background: ${other.LINEAR_GRADIENT};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: none;
`;
