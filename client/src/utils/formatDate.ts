export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', era: 'long' };
  const format = new Intl.DateTimeFormat('ru-RU', options).format(date).replace(/(\d{4}).*/, '$1');

  return format;
};

export const formatDateButton = (dateString: string | null | undefined = '') => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('ru-Ru', { day: '2-digit', month: '2-digit' }).format(date);
};
