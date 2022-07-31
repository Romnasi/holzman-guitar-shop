import { GuitarsData } from './card-data';

export type CounterItem = {
  [key: string]: number;
};

export type ProductCounter = {
  [key: string]: number;
} | Record<string, never>;

export type CouponStatus = null | boolean;

export type CartData = {
  guitars: GuitarsData;
  counter: ProductCounter;
  coupon: string;
  discount: number;
  couponStatus: CouponStatus;
};

export type CartItemQuantityComponent = {
  id: number;
  handleModalOpen: () => void;
}

export type CartFormCoupon = {
  coupon: '',
};
