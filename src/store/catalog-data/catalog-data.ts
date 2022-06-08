import {createReducer} from '@reduxjs/toolkit';
import { loadGuitars } from '../action';
import { CatalogData } from '../../types/card-data';

const initialState: CatalogData = {
  guitars: [],
  isDataLoaded: false,
};

const catalogData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const {guitars} = action.payload;

      state.guitars = guitars;
      state.isDataLoaded = true;
    });
});

export {catalogData};
