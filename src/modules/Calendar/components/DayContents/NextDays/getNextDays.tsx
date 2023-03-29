import dataTestId from 'constants/dataTestId';

import { v4 as uuidv4 } from 'uuid';

import { DayButton } from './styles';

const getNextDays = (
  date: Date,
  daysElements: JSX.Element[],
  handler: (date: Date) => void,
  enabledDates: number[]
) => {
  let i = 1;

  while (daysElements.length % 7) {
    const day = new Date(date.getFullYear(), date.getMonth() + 1, i);

    daysElements.push(
      <DayButton
        key={uuidv4()}
        onClick={() => handler(day)}
        $variant={enabledDates.includes(day.getTime())}
        data-test-id={dataTestId.DAY_BUTTON}
      >
        <span>{i}</span>
      </DayButton>
    );
    i++;
  }
};

export default getNextDays;
