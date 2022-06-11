import { useSelector } from 'react-redux';
import { getComments } from '../../store/catalog-data/selectors';
import { ReviewCounterComponent } from '../../types/rate';

function ReviewCounter({ guitarId }: ReviewCounterComponent): JSX.Element {
  const comments = useSelector(getComments);
  const curComments = comments.filter(({ guitarId: id }) => id === guitarId);
  const reviewCount = curComments.length;

  return(
    <p className="rate__count">
      <span className="visually-hidden">Всего оценок:</span>
      {String(reviewCount)}
    </p>
  );
}

export default ReviewCounter;
