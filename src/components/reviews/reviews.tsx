import './scroll-marker.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import Review from '../review/review';
import { ReviewsComponent } from '../../types/review';
import { ReviewConfig } from '../../const/review';
import { goToTop } from '../../utils/scroll';
import useOnScreen from '../../hooks/useOnScreen';
import Modal from '../modal/modal';
import ReviewForm from '../review-form/review-form';


function Reviews({ reviewsData }: ReviewsComponent): JSX.Element {
  const [isHiddenModal, setIsHiddenModal] = useState(true);
  const [isHiddenShowButton, setIsHiddenShowButton] = useState(false);
  const [reviewCount, setReviewCount] = useState(ReviewConfig.DEFAULT_NUMBER);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useOnScreen(containerRef);

  const maxCount = reviewsData.length;
  const visibleReview = reviewsData.slice(ReviewConfig.START_INDEX, reviewCount);

  useEffect(() => {
    if (reviewCount >= maxCount) {
      setIsHiddenShowButton(true);
    }
  }, [reviewCount, maxCount]);

  useEffect(() => {
    if (isVisible && reviewCount < maxCount) {
      setReviewCount((prevState) => prevState + ReviewConfig.INCREMENT_STEP);
    }
    setIsVisible(false);
  }, [isVisible, setIsVisible, maxCount, reviewCount]);

  const handleModalClose = useCallback(
    () => {
      setIsHiddenModal(true);
    }, [],
  );

  return(
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button
        className="button button--red-border button--big reviews__sumbit-button"
        onClick={() => setIsHiddenModal(false)}
      >
        Оставить отзыв {isVisible && 'Yep, I am on screen'}
      </button>

      <Modal
        isHiddenModal={isHiddenModal}
        handleModalClose={handleModalClose}
        modalClass={'modal--review'}
      >
        <ReviewForm handleModalClose={handleModalClose} />
      </Modal>

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

      <button
        className="button button--up button--red-border button--big reviews__up-button"
        onClick={() => goToTop()}
      >
        Наверх
      </button>

      <span ref={containerRef} className="scroll-marker"></span>
    </section>
  );
}

export default Reviews;
