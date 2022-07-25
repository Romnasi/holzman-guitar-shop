import { GuitarData, GuitarTypes } from '../../types/card-data';
import { GuitarType } from '../../const/modal';
import { getCartName } from '../../utils/cart';
import { formatter, getBigImagePath } from '../../utils/catalog-product';

function CartItem({ previewImg, name, type, stringCount, vendorCode, price }: GuitarData): JSX.Element {
  return(
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
        <span className="button-cross__icon"></span>
        <span className="cart-item__close-button-interactive-area"></span>
      </button>

      <div className="cart-item__image">
        <img
          src={previewImg}
          srcSet={`${getBigImagePath(previewImg)} 2x`}
          width="55"
          height="130"
          alt={getCartName(type, name)}
        />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{getCartName(type, name)}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">
          {GuitarType[type as keyof GuitarTypes]}, {stringCount} струнная
        </p>
      </div>
      <div className="cart-item__price">{formatter.format(price)} ₽</div>
      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          placeholder="1"
          id="2-count"
          name="2-count"
          max="99"
        />
        <button className="quantity__button" aria-label="Увеличить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">17 500 ₽</div>
    </div>
  );
}

export default CartItem;
