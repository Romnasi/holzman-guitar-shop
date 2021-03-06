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

export type MinMax = number[];

export type FilterData = {
  priceMin: string | number;
  priceMax: string | number;
  minMax: MinMax;
  isActive: boolean;
  guitarType: GuitarType;
  strings: Strings;
}

type HandleFilterChange = (key: FilterQueryKey, value: string | number | boolean) => void;

export type FilterPriceComponent = {
  handleFilterChange: HandleFilterChange;
}

export type FilterTypeComponent = {
  handleFilterChange: HandleFilterChange;
}

export type FilterStringsComponent = {
  handleFilterChange: HandleFilterChange;
}

export type FilterMap = {
  [key: string]: boolean
}
