import { AppRoute } from '../../const/app-route';
import { GuitarData } from '../../types/card-data';
import { formatter, getBigImagePath } from '../../utils/catalog-product';
import ProductRate from '../product-rate/product-rate';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurGuitar } from '../../store/action';
import { CardType } from '../../const/rate';

function ProductCard(props: GuitarData): JSX.Element {
  const { name, previewImg, price, type, stringCount, rating, vendorCode } = props;
  const dispatch = useDispatch();

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
          cardType={CardType.CATALOG}
        />

        <p className="product-card__title">{name} {type}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{formatter.format(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link
          onClick={() => dispatch(addCurGuitar(props))}
          className="button button--mini"
          to={`/products/${vendorCode}`}
        >
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
