export const dateFormat = (date: Date | string): string => {
  const dateToFormat = typeof date === 'string' ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const formattedDate = new Intl.DateTimeFormat('es-MX', options).format(dateToFormat);
  return formattedDate;
}