import { createReducer } from '@reduxjs/toolkit';
import { FilterData } from '../../types/filter';
import { changeFilterStatus, changePriceMax, changePriceMin } from '../action';

const initialState: FilterData = {
  priceMin: '',
  priceMax: '',
  isActive: false,
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
    .addCase(changeFilterStatus, (state, action) => {
      const {isActive} = action.payload;

      state.isActive = isActive;
    });
});

export {filterData};
