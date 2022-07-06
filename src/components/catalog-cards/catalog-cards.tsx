import './catalog-cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCurPagination, getGuitars, getSortType } from '../../store/catalog-data/selectors';
import ProductCard from '../product-card/product-card';
import { PaginationData } from '../../const/pagination';
import { getSortedGuitars } from '../../utils/sort';
import { getFilterState } from '../../store/filter-data/selectors';
import { FilterData } from '../../types/filter';
import { GuitarsData } from '../../types/card-data';
import { changeGuitarNumber } from '../../store/action';

const getFilteredGuitars = (sortedGuitars: GuitarsData, filterState: FilterData) => {
  const { isActive, priceMin, priceMax } = filterState;

  if (!isActive) {
    return sortedGuitars;
  }
  let filteredGuitars = sortedGuitars.slice();

  if (priceMin !== '') {
    filteredGuitars = filteredGuitars.filter(({price}) => price >= priceMin);
  }

  if (priceMax !== '') {
    filteredGuitars = filteredGuitars.filter(({price}) => price <= priceMax);
  }

  return filteredGuitars;
};

function CatalogCards(): JSX.Element {
  const dispatch = useDispatch();
  const curPagination = useSelector(getCurPagination);
  const guitars = useSelector(getGuitars);
  const sortType = useSelector(getSortType);
  const filterState = useSelector(getFilterState);

  const sortedGuitars = getSortedGuitars(guitars, sortType);
  const filteredGuitars = getFilteredGuitars(sortedGuitars, filterState);
  dispatch(changeGuitarNumber(filteredGuitars.length));

  const startIndex = PaginationData.CARD_PER_PAGE * (curPagination - 1);
  const endIndex = PaginationData.CARD_PER_PAGE * curPagination;
  const curGuitars = filteredGuitars.slice(startIndex, endIndex);

  return (
    <ul className="cards catalog__cards">
      {curGuitars.map((cardData) => <li key={cardData.id}><ProductCard {...cardData} /></li>)}
    </ul>
  );
}

export default CatalogCards;
