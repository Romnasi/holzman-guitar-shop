import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/store';
import { cartData } from './cart-data/cart-data';
import { catalogData } from './catalog-data/catalog-data';
import { filterData } from './filter-data/filter-data';

export const rootReducer = combineReducers({
  [NameSpace.DATA]: catalogData,
  [NameSpace.FILTER]: filterData,
  [NameSpace.CART]: cartData,
});

export type RootState = ReturnType<typeof rootReducer>;
