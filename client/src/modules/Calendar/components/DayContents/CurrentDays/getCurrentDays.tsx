import dataTestId from 'constants/dataTestId';

import getCurrentDate from 'utils/calendar/getCurrentDate';
import { v4 as uuidv4 } from 'uuid';

import { DayButton } from './styles';

const getCurrentDays = (
  date: Date,
  daysElements: JSX.Element[],
  handler: (date: Date) => void,
  selectedDate: Date | undefined,
  enabledDates: number[]
) => {
  const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  for (let i = 0; i < lastDateOfMonth; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i + 1);

    const isToday =
      i + 1 === getCurrentDate().getDate() &&
      date.getMonth() === getCurrentDate().getMonth() &&
      date.getFullYear() === getCurrentDate().getFullYear();

    const getButtonVariant = () => {
      switch (true) {
        case selectedDate?.getDate() === day.getDate() && selectedDate?.getMonth() === day.getMonth():
          return 'selectedDay';
        case (isToday && day.getDay() === 0) || (isToday && day.getDay() === 6):
          return 'todayIsWeekday';
        case isToday:
          return 'today';
        case day.getDay() === 0 || day.getDay() === 6:
          return 'weekday';
        case enabledDates.includes(day.getTime()):
          return 'enabled';
        default:
      }
    };

    daysElements.push(
      <DayButton
        key={uuidv4()}
        onClick={() => handler(day)}
        $variant={getButtonVariant()}
        data-test-id={dataTestId.DAY_BUTTON}
      >
        <span>{i + 1}</span>
      </DayButton>
    );
  }
};

export default getCurrentDays;
