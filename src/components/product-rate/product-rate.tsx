import { getStarsStatus, getEvaluation } from '../../utils/rate';
import { RateProps } from '../../types/card-data';
import { RateClass, RateStarWidth, RateStarHeight, CardType } from '../../const/rate';
import ReviewCounter from '../review-counter/review-counter';

function ProductRate({ rating, cardType, guitarId }: RateProps): JSX.Element {
  const starsStatus = getStarsStatus(rating);

  return(
    <div className={RateClass[cardType]}>
      {starsStatus.map(({ status, id }) => {
        const starType = status ? '#icon-full-star' : '#icon-star';

        return (
          <svg
            key={id}
            width={RateStarWidth[cardType]}
            height={RateStarHeight[cardType]}
            aria-hidden="true"
          >
            <use xlinkHref={starType}></use>
          </svg>
        );
      })}

      <p className="visually-hidden">
        {`Рейтинг: ${getEvaluation(rating)}`}
      </p>

      {
        cardType === CardType.CATALOG &&
        <ReviewCounter guitarId={guitarId} />
      }
    </div>
  );
}

export default ProductRate;
