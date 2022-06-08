import {createReducer} from '@reduxjs/toolkit';
import { changeCurPagination, loadGuitars } from '../action';
import { CatalogData } from '../../types/card-data';
import { PaginationData } from '../../const/pagination';

const initialState: CatalogData = {
  guitars: [],
  isDataLoaded: false,
  curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
  guitarNumber: 0,
};

const catalogData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const {guitars} = action.payload;

      state.guitars = guitars;
      state.isDataLoaded = true;
      state.guitarNumber = guitars.length;
    })
    .addCase(changeCurPagination, (state, action) => {
      const {curPagination} = action.payload;

      state.curPagination = curPagination;
    });
});

export {catalogData};
