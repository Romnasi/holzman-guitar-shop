import { GuitarsData } from '../types/card-data';
import { FilterQueryKey } from '../const/filter';

export type FilterData = {
  priceMin: string | number;
  priceMax: string | number;
  isActive: boolean;
  acoustic: boolean;
  electric: boolean;
  ukulele: boolean;
  fourStrings: boolean;
  sixStrings: boolean;
  sevenStrings: boolean;
  twelveStrings: boolean;
}

type HandleFilterChange = (key: FilterQueryKey, value: string | number) => void;

export type FilterPriceComponent = {
  guitars: GuitarsData;
  handleFilterChange: HandleFilterChange;
}

export type FilterTypeComponent = {
  handleFilterChange: HandleFilterChange;
}

export type FilterStringsComponent = {
  handleFilterChange: HandleFilterChange;
}
