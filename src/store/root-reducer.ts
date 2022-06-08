import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/store';
import {catalogData} from './catalog-data/catalog-data';

export const rootReducer = combineReducers({
  [NameSpace.data]: catalogData,
});

export type RootState = ReturnType<typeof rootReducer>;
