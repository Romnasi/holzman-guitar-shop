import { createReducer } from '@reduxjs/toolkit';
import { FilterData } from '../../types/filter';
import { changePriceMin } from '../action';

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
    });
});

export {filterData};
