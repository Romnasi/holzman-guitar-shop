import { useSelector } from 'react-redux';
import { getCurPagination, getGuitars, getLoadedDataStatus } from '../../store/catalog-data/selectors';
import ProductCard from '../product-card/product-card';
import { PaginationData } from '../../const/pagination';

function CatalogCards(): JSX.Element {
  const curPagination = useSelector(getCurPagination);
  const guitars = useSelector(getGuitars);
  const startIndex = PaginationData.CARD_PER_PAGE * (curPagination - 1);
  const endIndex = PaginationData.CARD_PER_PAGE * curPagination;
  const curGuitars = guitars.slice(startIndex, endIndex);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return <p>Загрузка</p>;
  }

  return (
    <div className="cards catalog__cards">
      {curGuitars.map((cardData) => <ProductCard key={cardData.id} {...cardData} />)}
    </div>
  );
}

export default CatalogCards;
