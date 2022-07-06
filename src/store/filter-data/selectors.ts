import { NameSpace } from '../../const/store';
import { FilterData } from '../../types/filter';
import { State } from '../../types/state';

export const getFilterState = (state: State): FilterData => state[NameSpace.filter];
export const getPriceMin = (state: State): string | number => state[NameSpace.filter].priceMin;
export const getPriceMax = (state: State): string | number => state[NameSpace.filter].priceMax;
