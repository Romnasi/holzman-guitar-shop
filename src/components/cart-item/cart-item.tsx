import { GuitarData, GuitarTypes } from '../../types/card-data';
import { GuitarType } from '../../const/modal';
import { getCartName } from '../../utils/cart';
import { formatter, getBigImagePath } from '../../utils/catalog-product';
import CartItemQuantity from '../cart-item-quantity/cart-item-quantity';
import { useSelector } from 'react-redux';
import { getCartCounter } from '../../store/cart-data/selectors';

function CartItem({ previewImg, name, type, stringCount, vendorCode, price, id }: GuitarData): JSX.Element {
  const count = useSelector(getCartCounter)[id.toString()];

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

      <CartItemQuantity id={id} />

      <div className="cart-item__price-total">{formatter.format(price * count)} ₽</div>
    </div>
  );
}

export default CartItem;
