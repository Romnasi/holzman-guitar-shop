import { ReviewData } from '../types/review';

export const getCurrentSortedReviews = (comments: ReviewData[], guitarId: number) => comments
  .filter(({ guitarId: idFromReview }) => idFromReview === guitarId)
  .sort((a, b) => Number(new Date(b.createAt)) - Number(new Date(a.createAt)));
