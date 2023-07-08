import { weekDays } from 'modules/Calendar/data';
import getAvailableDays from 'utils/calendar/getAvailableDays';

import getCurrentDays from './CurrentDays/getCurrentDays';
import getNextDays from './NextDays/getNextDays';
import getPrevDays from './PrevDays/getPrevDays';
import { DayContentsStyled, WeekDay } from './styles';

type TProps = {
  date: Date;
  selectedDate?: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const DayContents = ({ date, selectedDate, setSelectedDate }: TProps) => {
  const renderDays = () => {
    const daysElements: JSX.Element[] = [];
    const enabledDates: number[] = getAvailableDays();

    weekDays.forEach((item, index) => {
      daysElements.push(<WeekDay key={index}>{item}</WeekDay>);
    });

    const handleClick = (dateValue: Date) => {
      if (enabledDates.includes(dateValue.getTime())) {
        setSelectedDate(dateValue);
      }
    };

    getPrevDays(date, daysElements);
    getCurrentDays(date, daysElements, handleClick, selectedDate, enabledDates);
    getNextDays(date, daysElements, handleClick, enabledDates);

    return daysElements;
  };

  return <DayContentsStyled>{renderDays()}</DayContentsStyled>;
};

export default DayContents;
