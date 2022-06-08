import { AppRoute } from '../../const/app-route';
import { CardDataProps } from '../../types/card-data';
import { formatter, getBigImagePath } from '../../utils/catalog-product';
import ProductRate from '../product-rate/product-rate';
import { Link } from 'react-router-dom';

function ProductCard({ name, previewImg, price, type, stringCount, rating, vendorCode }: CardDataProps): JSX.Element {
  return (
    <article className="product-card">
      <img
        src={previewImg}
        srcSet={`${getBigImagePath(previewImg)} 2x`}
        width="75" height="190" alt={name}
      />
      <div className="product-card__info">
        <ProductRate
          stringCount={stringCount}
          rating={rating}
          classNames={'product-card__rate'}
        />

        <p className="product-card__title">{name} {type}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{formatter.format(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/${vendorCode}`}>
          Подробнее
        </Link>

        <Link className="button button--red button--mini button--add-to-cart" to={AppRoute.CART}>
          Купить
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
