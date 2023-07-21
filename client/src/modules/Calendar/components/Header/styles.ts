import { ActionMonthPicker_Icon, Chevron_Icon } from 'assets';
import styled from 'styled-components';
import { colors, other } from 'styles';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const MonthBox = styled.div`
  display: flex;
`;

export const MonthText = styled.p``;

export const DayContents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-template-rows: repeat(6, 32px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const MonthSelect = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: ${colors.GREY_BLACK_40};
    margin-right: 4px;
    margin-left: 6px;
  }
`;

export const OptionsWrapper = styled.div`
  transform: translate(0, 30px);
  background: ${colors.GREY_BLACK_5};
  background: white;
  box-shadow: ${other.MAIN_SHADOW};
  border-radius: 8px;
  position: absolute;
  padding: 10px;
`;

export const NavBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  user-select: none;
`;

export const Option = styled.p`
  cursor: pointer;

  &:hover {
    color: ${colors.GREY_BLACK_40};
  }
`;

export const Button = styled.button`
  background-color: transparent !important;

  &:first-child {
    svg {
      rotate: 180deg;
    }
  }
`;

export const ChevronIcon = styled(Chevron_Icon)`
  width: 22px;
  height: 18px;
  cursor: pointer;

  path {
    fill: ${colors.MAIN_DARK};
  }
`;

export const ActionMonthPickerIcon = styled(ActionMonthPicker_Icon)``;
