import getCurrentDate from './getCurrentDate';

const getAvailableDays = () => {
  const result: number[] = [];
  const newDate = getCurrentDate();
  const currentDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());

  if (currentDate.getDay() === 6) {
    result.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2).getTime());

    return result;
  }
  if (currentDate.getDay() === 0) {
    result.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1).getTime());

    return result;
  }
  if (currentDate.getDay() === 5) {
    result.push(
      currentDate.getTime(),
      new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3).getTime()
    );

    return result;
  }
  result.push(
    currentDate.getTime(),
    new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1).getTime()
  );

  return result;
};

export default getAvailableDays;
