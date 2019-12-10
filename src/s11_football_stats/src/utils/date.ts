export const getDateFromString = (dateString: string): Date => {
  const [day, month, year] = dateString
    .split('/')
    .map((num) => parseInt(num, 10));

  return new Date(year, month, day);
};
