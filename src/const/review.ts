import { ReviewFormValues } from '../types/review';

export const enum ReviewConfig {
  DEFAULT_NUMBER = 3,
  START_INDEX = 0,
  INCREMENT_STEP = 3,
}

export const intersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const reviewFormValues: ReviewFormValues = {
  userName: '',
  rating: '',
  advantage: '',
  disadvantage: '',
  comment: '',
};
