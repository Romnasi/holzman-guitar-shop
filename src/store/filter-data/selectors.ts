import { NameSpace } from '../../const/store';
import { FilterData, GuitarType, Strings } from '../../types/filter';
import { State } from '../../types/state';

export const getFilterState = (state: State): FilterData => state[NameSpace.filter];
export const getPriceMin = (state: State): string | number => state[NameSpace.filter].priceMin;
export const getPriceMax = (state: State): string | number => state[NameSpace.filter].priceMax;

export const getGuitarTypeState = (state: State): GuitarType => state[NameSpace.filter].guitarType;
export const getStringsState = (state: State): Strings => state[NameSpace.filter].strings;
