const getCurrentDate = (date?: Date) => {
  const newDate = new Date();
  const timeZone = 'Europe/Moscow';
  const currentDate = newDate.toLocaleDateString('en-US', { timeZone });

  return new Date(currentDate);
};

export default getCurrentDate;
