import { CardType } from '../../const/rate';
import { ReviewData } from '../../types/review';
import { getFormattedDate } from '../../utils/date';
import ProductRate from '../product-rate/product-rate';

function Review({ userName, advantage, disadvantage, comment, createAt, rating }: ReviewData): JSX.Element {
  return(
    <article className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">
          {userName}
        </h4>
        <span className="review__date">{getFormattedDate(createAt)}</span>
      </div>

      <ProductRate rating={rating} cardType={CardType.REVIEW} />

      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantage}</p>

      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantage}</p>

      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment}</p>
    </article>
  );
}

export default Review;
