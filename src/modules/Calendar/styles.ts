import styled from 'styled-components';
import { device, typography } from 'styles';

export const CalendarStyled = styled.div`
  width: 256px;
  height: 280px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 8px;

  @media (max-width: ${device.tablet}) {
  }
`;

export const DayContents = styled.div`
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
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: none;
`;
