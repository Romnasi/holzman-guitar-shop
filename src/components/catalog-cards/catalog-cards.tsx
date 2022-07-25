import './catalog-cards.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurPagination, getGuitars, getSortType } from '../../store/catalog-data/selectors';
import ProductCard from '../product-card/product-card';
import { PaginationData } from '../../const/pagination';
import { getSortedGuitars } from '../../utils/sort';
import { getFilterState } from '../../store/filter-data/selectors';
import { changeGuitarNumber, changeMinMax } from '../../store/action';
import { getFilteredGuitars, getMinMaxPrice } from '../../utils/filter';

function CatalogCards(): JSX.Element {
  const dispatch = useDispatch();
  const curPagination = useSelector(getCurPagination);
  const guitars = useSelector(getGuitars);
  const sortType = useSelector(getSortType);
  const filterState = useSelector(getFilterState);

  const sortedGuitars = getSortedGuitars(guitars, sortType);
  const filteredGuitars = getFilteredGuitars(sortedGuitars, filterState);
  const [min, max] = getMinMaxPrice(filteredGuitars);

  const startIndex = PaginationData.CARD_PER_PAGE * (curPagination - 1);
  const endIndex = PaginationData.CARD_PER_PAGE * curPagination;
  const curGuitars = filteredGuitars.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(changeGuitarNumber(filteredGuitars.length));
  }, [filteredGuitars, dispatch]);

  useEffect(() => {
    dispatch(changeMinMax([min, max]));
  }, [min, max]);

  return (
    <ul className="cards catalog__cards">
      {curGuitars.map((cardData) => <li key={cardData.id}><ProductCard {...cardData} /></li>)}
    </ul>
  );
}

export default CatalogCards;
