import { NameSpace } from '../../const/store';
import { State } from '../../types/state';
import { GuitarsData } from '../../types/card-data';
import { CouponStatus, ProductCounter } from '../../types/cart';

export const getCartGuitars = (state: State): GuitarsData => state[NameSpace.CART].guitars;
export const getCartCounter = (state: State): ProductCounter => state[NameSpace.CART].counter;
export const getDiscount = (state: State): number => state[NameSpace.CART].discount;
export const getCouponStatus = (state: State): CouponStatus => state[NameSpace.CART].couponStatus;
export const getCouponValue = (state: State): string => state[NameSpace.CART].coupon;
