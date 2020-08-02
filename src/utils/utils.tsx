export const truncateText = (text: string, length: number = 40) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + '\u2026';
};

export const getMonthName = (month: number) => {
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return monthName[month];
};
