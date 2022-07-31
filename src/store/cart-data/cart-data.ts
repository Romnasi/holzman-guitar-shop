import { createReducer } from '@reduxjs/toolkit';
import { addCoupon, addDiscount, addGuitarToCard, changeCartCounter, changeCouponStatus, deleteProduct } from '../action';
import { CartData } from '../../types/cart';

const initialState: CartData = {
  guitars: [],
  counter: {},
  coupon: '',
  discount: 0,
  couponStatus: null,
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
    })
    .addCase(deleteProduct, (state, action) => {
      const { id } = action.payload;
      const { counter } = state;
      const guitarId = id.toString();
      const prevCount = state.counter[guitarId];

      const idx = state.guitars.map(({ id: curId }) => curId).indexOf(id);
      if (idx + 1) {
        state.guitars = [
          ...state.guitars.slice(0, idx),
          ...state.guitars.slice(idx + 1),
        ];
      }

      if (prevCount || prevCount === 0) {
        delete counter[guitarId];
        state.counter = counter;
      }
    })
    .addCase(addDiscount, (state, action) => {
      const { discount } = action.payload;
      state.discount = discount;
    })
    .addCase(addCoupon, (state, action) => {
      const { coupon } = action.payload;
      state.coupon = coupon;
    })
    .addCase(changeCouponStatus, (state, action) => {
      const { status } = action.payload;
      state.couponStatus = status;
    });
});

export {cartData};
