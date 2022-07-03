import { GuitarsData } from '../types/card-data';

export type PriceState = {
  min: undefined | number;
  max: undefined | number;
}

export type FilterPriceComponent = {
  guitars: GuitarsData;
}
