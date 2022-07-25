import { GuitarsData } from './card-data';

export type ProductCounter = {
  [key: string]: number;
} | Record<string, never>;

export type CartData = {
  guitars: GuitarsData;
  counter: ProductCounter;
};
