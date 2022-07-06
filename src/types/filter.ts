import { GuitarsData } from '../types/card-data';
import { FilterQueryKey } from '../const/filter';

export type GuitarType = {
  acoustic: boolean;
  electric: boolean;
  ukulele: boolean;
}

export type UpdateGuitarType = {
  acoustic?: boolean;
  electric?: boolean;
  ukulele?: boolean;
}

export type Strings = {
  fourStrings: boolean;
  sixStrings: boolean;
  sevenStrings: boolean;
  twelveStrings: boolean;
}

export type UpdateStrings = {
  fourStrings?: boolean;
  sixStrings?: boolean;
  sevenStrings?: boolean;
  twelveStrings?: boolean;
}

export type FilterData = {
  priceMin: string | number;
  priceMax: string | number;
  isActive: boolean;
  guitarType: GuitarType;
  strings: Strings;
}

type HandleFilterChange = (key: FilterQueryKey, value: string | number | boolean) => void;

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
