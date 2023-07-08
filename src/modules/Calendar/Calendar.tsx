import dataTestId from 'constants/dataTestId';

import { useState } from 'react';

import DayContents from './components/DayContents/DayContents';
import Header from './components/Header/Header';
import { CalendarStyled } from './styles';

type TProps = {
  selectedDate?: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const Calendar = ({ selectedDate, setSelectedDate }: TProps) => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarStyled data-test-id={dataTestId.CALENDAR}>
      <Header date={date} setDate={setDate} />
      <DayContents date={date} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </CalendarStyled>
  );
};

export default Calendar;
