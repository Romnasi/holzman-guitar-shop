import './catalog-cards.css';
import { useSelector } from 'react-redux';
import { getCurPagination, getGuitars, getSortType } from '../../store/catalog-data/selectors';
import ProductCard from '../product-card/product-card';
import { PaginationData } from '../../const/pagination';
import { getSortedGuitars } from '../../utils/sort';

function CatalogCards(): JSX.Element {
  const curPagination = useSelector(getCurPagination);
  const guitars = useSelector(getGuitars);
  const sortType = useSelector(getSortType);

  const sortedGuitars = getSortedGuitars(guitars, sortType);
  const startIndex = PaginationData.CARD_PER_PAGE * (curPagination - 1);
  const endIndex = PaginationData.CARD_PER_PAGE * curPagination;
  const curGuitars = sortedGuitars.slice(startIndex, endIndex);

  return (
    <ul className="cards catalog__cards">
      {curGuitars.map((cardData) => <li key={cardData.id}><ProductCard {...cardData} /></li>)}
    </ul>
  );
}

export default CatalogCards;
