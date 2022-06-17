export const getFormattedDate = (dateIso: string): string => {
  const date = new Date(dateIso);
  return `${date.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  })}`;
};
