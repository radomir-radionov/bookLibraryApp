import dataTestId from 'constants/dataTestId';

import { v4 as uuidv4 } from 'uuid';

import { DayButton } from './styles';

const getPrevDays = (date: Date, daysElements: JSX.Element[]) => {
  const prevDate = new Date(date.getFullYear(), date.getMonth(), 0);

  for (let i = prevDate.getDay(); i > 0; i--) {
    daysElements.push(
      <DayButton key={uuidv4()} data-test-id={dataTestId.DAY_BUTTON}>
        <span>{prevDate.getDate() - i + 1}</span>
      </DayButton>
    );
  }
};

export default getPrevDays;
