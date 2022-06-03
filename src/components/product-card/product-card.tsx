import { CardDataProps } from '../../types/card-data';

const formatter =new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });

function ProductCard({ name, previewImg, price }: CardDataProps): JSX.Element {
  return (
    <article className="product-card">
      <img
        src={previewImg}
        srcSet={`${previewImg}@2x.jpg 2x`}
        width="75" height="190" alt={name}
      />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>9</p>
        </div>
        <p className="product-card__title">СURT Z30 Plus Acoustics</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{formatter.format(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </article>
  );
}

export default ProductCard;
