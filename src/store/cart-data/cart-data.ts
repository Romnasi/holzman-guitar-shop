import { createReducer } from '@reduxjs/toolkit';
import { addGuitarToCard, changeCartCounter } from '../action';
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
      const prevCount = state.counter[guitarId];

      if (prevCount || prevCount === 0) {
        state.counter[guitarId]++;
        return;
      }
      state.counter[guitarId] = 1;
      state.guitars = [...state.guitars, guitar];
    })
    .addCase(changeCartCounter, (state, action) => {
      const { counter } = action.payload;

      const [guitarId, guitarCount] = Object.entries(counter)[0];
      const prevCount = state.counter[guitarId];
      if (prevCount || prevCount === 0) {
        state.counter[guitarId] = guitarCount;
      }
    });
});

export {cartData};
