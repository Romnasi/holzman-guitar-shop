import { useSelector } from 'react-redux';
import { getGuitars, getLoadedDataStatus } from '../../store/catalog-data/selectors';
import ProductCard from '../product-card/product-card';
// import { cardsData } from './mock-cards';

function CatalogCards(): JSX.Element {
  const guitars = useSelector(getGuitars);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return <p>Загрузка</p>;
  }

  return (
    <div className="cards catalog__cards">
      {guitars.map((cardData) => <ProductCard key={cardData.id} {...cardData} />)}
    </div>
  );
}

export default CatalogCards;
