import { GuitarsData } from '../types/card-data';
import { FilterQueryKey } from '../const/filter';

export type FilterData = {
  priceMin: string | number;
  priceMax: string | number;
  isActive: boolean;
}

export type FilterPriceComponent = {
  guitars: GuitarsData;
  handleFilterChange: (key: FilterQueryKey, value: string | number) => void;
}
