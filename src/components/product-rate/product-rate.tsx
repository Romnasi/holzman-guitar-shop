import { getStarsStatus, getEvaluation } from '../../utils/rate';
import { RateProps } from '../../types/card-data';

function ProductRate({ stringCount, rating }: RateProps): JSX.Element {
  const starsStatus = getStarsStatus(rating);

  return(
    <div className="rate product-card__rate">
      {starsStatus.map(({ status, id }) => {
        const starType = status ? '#icon-full-star' : '#icon-star';

        return (
          <svg key={id} width="12" height="11" aria-hidden="true">
            <use xlinkHref={starType}></use>
          </svg>
        );
      })}

      <p className="visually-hidden">
        {`Рейтинг: ${getEvaluation(rating)}`}
      </p>

      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{stringCount}
      </p>
    </div>
  );
}

export default ProductRate;
