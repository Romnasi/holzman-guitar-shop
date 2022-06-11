export const getFormattedDate = (dateIso: Date): string => {
  const date = new Date(dateIso);
  return `${date.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  })}`;
};
