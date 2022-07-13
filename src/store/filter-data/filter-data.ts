import { createReducer } from '@reduxjs/toolkit';
import { FilterData } from '../../types/filter';
import {
  changeFilterStatus,
  changeFilterStrings,
  changeFilterType,
  changeMinMax,
  changePriceMax,
  changePriceMin,
  resetFilterState
} from '../action';

const initialState: FilterData = {
  priceMin: '',
  priceMax: '',
  minMax: [0, 0],
  isActive: false,
  guitarType: {
    acoustic: false,
    electric: false,
    ukulele: false,
  },
  strings: {
    fourStrings: false,
    sixStrings: false,
    sevenStrings: false,
    twelveStrings: false,
  },
};

const filterData = createReducer(initialState, (builder) => {
  builder
    .addCase(changePriceMin, (state, action) => {
      const {priceMin} = action.payload;

      state.priceMin = priceMin;
    })
    .addCase(changePriceMax, (state, action) => {
      const {priceMax} = action.payload;

      state.priceMax = priceMax;
    })
    .addCase(changeMinMax, (state, action) => {
      const {minMax} = action.payload;

      state.minMax = minMax;
    })
    .addCase(changeFilterStatus, (state, action) => {
      const {isActive} = action.payload;

      state.isActive = isActive;
    })
    .addCase(changeFilterType, (state, action) => {
      const {update} = action.payload;

      state.guitarType = {...state.guitarType, ...update};
    })
    .addCase(changeFilterStrings, (state, action) => {
      const {update} = action.payload;

      state.strings = {...state.strings, ...update};
    })
    .addCase(resetFilterState, (state) => {
      state.priceMin = initialState.priceMin;
      state.priceMax = initialState.priceMax;
      state.isActive = initialState.isActive;
      state.guitarType = initialState.guitarType;
      state.strings = initialState.strings;
    });
});

export {filterData};
