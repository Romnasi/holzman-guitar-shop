import { useEffect, useState } from 'react';
import Review from '../review/review';
import { ReviewsComponent } from '../../types/review';
import { ReviewConfig } from '../../const/review';

function Reviews({ reviewsData }: ReviewsComponent): JSX.Element {
  const [reviewCount, setReviewCount] = useState(ReviewConfig.DEFAULT_NUMBER);
  const [isHiddenShowButton, setIsHiddenShowButton] = useState(false);
  const maxCount = reviewsData.length;
  const visibleReview = reviewsData.slice(ReviewConfig.START_INDEX, reviewCount);

  useEffect(() => {
    if (reviewCount >= maxCount) {
      setIsHiddenShowButton(true);
    }
  }, [reviewCount, maxCount]);

  return(
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button className="button button--red-border button--big reviews__sumbit-button">
        Оставить отзыв
      </button>

      {visibleReview.map((review) => <Review key={review.id} {...review} />)}

      {
        !isHiddenShowButton &&
        <button
          className="button button--medium reviews__more-button"
          onClick={() => setReviewCount((prevState) => prevState + ReviewConfig.INCREMENT_STEP)}
        >
          Показать еще отзывы
        </button>
      }

      <a
        className="button button--up button--red-border button--big reviews__up-button"
        href="#header"
      >
        Наверх
      </a>
    </section>
  );
}

export default Reviews;
