import { STAR_COUNT, Evaluation } from '../const/rate';

export const getStarsStatus = (rate: number) => {
  const fullStarCount = Math.round(rate);
  const emptyStarCount = STAR_COUNT - fullStarCount;

  const fullStars = new Array(fullStarCount).fill(true);
  const emptyStars = new Array(emptyStarCount).fill(false);

  return [...fullStars, ...emptyStars].map((status, id) => ({ status, id }));
};

export const getEvaluation = (rate: number): string => {
  const roundedRate = Math.round(rate);
  if (roundedRate > 4) {
    return Evaluation.EXCELLENT;
  }
  if (roundedRate > 3) {
    return Evaluation.GOOD;
  }
  return Evaluation.BAD;
};
