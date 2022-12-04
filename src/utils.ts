export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString.split('/')
    .map((value: string): number => {
      return parseInt(value);
    });

  const day = dateParts[0];
  const month = dateParts[1] - 1;
  const year = dateParts[2];
  return new Date(year, month, day);
};