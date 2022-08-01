import { cartData } from './cart-data';
import { mockGuitars } from '../../const/mock';
import { addCoupon, addDiscount, addGuitarToCard, changeCouponStatus } from '../action';

const initialState = {
  guitars: [],
  counter: {},
  coupon: '',
  discount: 0,
  couponStatus: null,
};

describe('Reducer: catalogData', () => {
  it('without additional parameters should return initial state', () => {
    expect(cartData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should add guitar, update counter', () => {
    const mockGuitar = mockGuitars[0];
    expect(cartData(initialState, addGuitarToCard(mockGuitar)))
      .toEqual({
        guitars: [mockGuitar],
        counter: {[mockGuitar.id]: 1},
        coupon: '',
        discount: 0,
        couponStatus: null,
      });
  });

  it('should add discount', () => {
    const discount = 15;
    expect(cartData(initialState, addDiscount(discount)))
      .toEqual({
        guitars: [],
        counter: {},
        coupon: '',
        discount: discount,
        couponStatus: null,
      });
  });

  it('should add coupon', () => {
    const coupon = 'test_coupon';
    expect(cartData(initialState, addCoupon(coupon)))
      .toEqual({
        guitars: [],
        counter: {},
        coupon: coupon,
        discount: 0,
        couponStatus: null,
      });
  });

  it('should change coupon status', () => {
    const couponStatus = true;
    expect(cartData(initialState, changeCouponStatus(couponStatus)))
      .toEqual({
        guitars: [],
        counter: {},
        coupon: '',
        discount: 0,
        couponStatus: couponStatus,
      });
  });
});
