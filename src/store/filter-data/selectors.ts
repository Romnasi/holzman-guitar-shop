import { NameSpace } from '../../const/store';
import { FilterData, GuitarType, MinMax, Strings } from '../../types/filter';
import { State } from '../../types/state';

export const getFilterState = (state: State): FilterData => state[NameSpace.FILTER];
export const getMinMax = (state: State): MinMax => state[NameSpace.FILTER].minMax;
export const getPriceMin = (state: State): string | number => state[NameSpace.FILTER].priceMin;
export const getPriceMax = (state: State): string | number => state[NameSpace.FILTER].priceMax;

export const getGuitarTypeState = (state: State): GuitarType => state[NameSpace.FILTER].guitarType;
export const getStringsState = (state: State): Strings => state[NameSpace.FILTER].strings;
