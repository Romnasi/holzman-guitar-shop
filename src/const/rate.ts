import { RateMap } from '../types/rate';

export const STAR_COUNT = 5;

export const enum Evaluation {
  EXCELLENT = 'Отлично',
  GOOD = 'Хорошо',
  BAD = 'Плохо',
}

export const RateClass: RateMap = {
  CATALOG: 'rate product-card__rate',
  PRODUCT: 'rate product-container__rating',
  REVIEW: 'rate review__rating-panel',
};

export const RateStarWidth: RateMap = {
  CATALOG: '12',
  PRODUCT: '14',
  REVIEW: '16',
};

export const RateStarHeight: RateMap = {
  CATALOG: '11',
  PRODUCT: '14',
  REVIEW: '16',
};

export const enum CardType {
  CATALOG = 'CATALOG',
  PRODUCT = 'PRODUCT',
  REVIEW = 'REVIEW',
}
