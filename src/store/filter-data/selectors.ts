import { NameSpace } from '../../const/store';
import { FilterData } from '../../types/filter';
import { State } from '../../types/state';

export const getFilterState = (state: State): FilterData => state[NameSpace.filter];
export const getPriceMin = (state: State): string | number => state[NameSpace.filter].priceMin;
export const getPriceMax = (state: State): string | number => state[NameSpace.filter].priceMax;

export const getAcousticStatus = (state: State): boolean => state[NameSpace.filter].acoustic;
export const getElectricStatus = (state: State): boolean => state[NameSpace.filter].electric;
export const getUkuleleStatus = (state: State): boolean => state[NameSpace.filter].ukulele;

export const getFourStringsStatus = (state: State): boolean => state[NameSpace.filter].fourStrings;
export const getSixStringsStatus = (state: State): boolean => state[NameSpace.filter].sixStrings;
export const getSevenStringsStatus = (state: State): boolean => state[NameSpace.filter].sevenStrings;
export const getTwelveStringsStatus = (state: State): boolean => state[NameSpace.filter].twelveStrings;
