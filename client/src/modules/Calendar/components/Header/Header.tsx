import dataTestId from 'constants/dataTestId';

import { useState, Dispatch, SetStateAction } from 'react';
import { months } from 'modules/Calendar/data';

import {
  ActionMonthPickerIcon,
  Button,
  ChevronIcon,
  HeaderStyled,
  MonthBox,
  MonthSelect,
  MonthText,
  NavBtns,
  Option,
  OptionsWrapper,
} from './styles';

type CalendarProps = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

const Header = ({ date, setDate }: CalendarProps) => {
  const [openOptions, setOpenOptions] = useState(false);

  const selectMonth = (month: number) => setDate(new Date(date.getFullYear(), month));
  const setNextMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  const setPrevMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() - 1));

  const toggleOptions = () => setOpenOptions(!openOptions);
  const onMonthSelectClick = () => () => toggleOptions();
  const closeOptions = () => setOpenOptions(false);
  const onOptionClick = (i: number) => () => {
    selectMonth(i);
    closeOptions();
  };

  return (
    <HeaderStyled>
      <MonthBox>
        <MonthSelect onClick={onMonthSelectClick()} data-test-id={dataTestId.MONTH_SELECT}>
          <MonthText>
            {months[date.getMonth()]} {date.getFullYear()}
          </MonthText>
          <ActionMonthPickerIcon />
        </MonthSelect>
        {openOptions && (
          <OptionsWrapper>
            {months.map((item, i) => (
              <Option onClick={onOptionClick(i)}>{item}</Option>
            ))}
          </OptionsWrapper>
        )}
      </MonthBox>
      <NavBtns>
        <Button type='button' onClick={setPrevMonth} data-test-id={dataTestId.BUTTON_PREV_MONTH}>
          <ChevronIcon />
        </Button>
        <Button type='button' onClick={setNextMonth} data-test-id={dataTestId.BUTTON_NEXT_MONTH}>
          <ChevronIcon />
        </Button>
      </NavBtns>
    </HeaderStyled>
  );
};

export default Header;
