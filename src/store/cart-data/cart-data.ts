import { createReducer } from '@reduxjs/toolkit';
import { addGuitarToCard } from '../action';
import { CartData } from '../../types/cart';

const initialState: CartData = {
  guitars: [],
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(addGuitarToCard, (state, action) => {
      const { guitar } = action.payload;

      state.guitars = [...state.guitars, guitar];
    });
});

export {cartData};
