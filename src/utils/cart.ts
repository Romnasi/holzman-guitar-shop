import { GuitarType } from '../const/modal';
import { GuitarTypes, GuitarsData } from '../types/card-data';
import { ProductCounter } from '../types/cart';
import { formatter } from './catalog-product';

export const getCartName = (type: string, name: string) => `${GuitarType[type as keyof GuitarTypes]} ${name}`;

export const getTotalPrice = (guitars: GuitarsData, counter: ProductCounter) => guitars
  .reduce((acc, { id, price }) => acc + counter[id] * price, 0);

export const getDiscountSize = (totalPrice: number, discount: number) => discount === 0
  ? 0
  : totalPrice * (discount / 100);

export const getFomattedDiscount = (discountSize: number) => discountSize === 0
  ? '0  ₽'
  : `- ${formatter.format(discountSize)} ₽`;

export const getTotalPriceWithDiscount = (totalPrice: number, discount: number) => discount === 0
  ? totalPrice
  : totalPrice - totalPrice * (discount / 100);
