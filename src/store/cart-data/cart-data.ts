import { createReducer } from '@reduxjs/toolkit';
import { addGuitarToCard } from '../action';
import { CartData } from '../../types/cart';

const initialState: CartData = {
  guitars: [],
  counter: {},
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(addGuitarToCard, (state, action) => {
      const { guitar } = action.payload;

      const guitarId = guitar.id.toString();
      if (state.counter[guitarId]) {
        state.counter[guitar.id]++;
        return;
      }
      state.counter[guitar.id] = 1;
      state.guitars = [...state.guitars, guitar];
    });
});

export {cartData};
