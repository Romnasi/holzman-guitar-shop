import { GuitarsData } from '../types/card-data';

export const getMinMaxPrice = (guitars: GuitarsData) => {
  const prices = guitars.map(({price}) => price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
};
