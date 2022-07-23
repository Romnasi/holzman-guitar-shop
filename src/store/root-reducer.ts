import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/store';
import { catalogData } from './catalog-data/catalog-data';
import { filterData } from './filter-data/filter-data';

export const rootReducer = combineReducers({
  [NameSpace.DATA]: catalogData,
  [NameSpace.FILTER]: filterData,
});

export type RootState = ReturnType<typeof rootReducer>;
