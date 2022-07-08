import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/store';
import { catalogData } from './catalog-data/catalog-data';
import { filterData } from './filter-data/filter-data';

export const rootReducer = combineReducers({
  [NameSpace.data]: catalogData,
  [NameSpace.filter]: filterData,
});

export type RootState = ReturnType<typeof rootReducer>;
