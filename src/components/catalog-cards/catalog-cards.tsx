import ProductCard from '../product-card/product-card';
import { cardsData } from './mock-cards';

function CatalogCards(): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {cardsData.map((cardData) => <ProductCard key={cardData.id} {...cardData} />)}
    </div>
  );
}

export default CatalogCards;
