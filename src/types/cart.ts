import { GuitarsData } from './card-data';

export type CounterItem = {
  [key: string]: number;
};

export type ProductCounter = {
  [key: string]: number;
} | Record<string, never>;

export type CartData = {
  guitars: GuitarsData;
  counter: ProductCounter;
  coupon: string;
  discount: number;
};

export type CartItemQuantityComponent = {
  id: number;
  handleModalOpen: () => void;
}
