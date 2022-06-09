import { getStarsStatus, getEvaluation } from '../../utils/rate';
import { RateProps } from '../../types/card-data';
import { RateClass, RateStarWidth, RateStarHeight, CardType } from '../../const/rate';

function ProductRate({ stringCount, rating, cardType }: RateProps): JSX.Element {
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
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>{stringCount}
        </p>
      }
    </div>
  );
}

export default ProductRate;
