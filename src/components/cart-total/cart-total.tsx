import { useSelector } from 'react-redux';
import { getCartCounter, getCartGuitars, getDiscount } from '../../store/cart-data/selectors';
import { formatter } from '../../utils/catalog-product';
import { getTotalPrice, getDiscountSize, getTotalPriceWithDiscount, getFomattedDiscount } from '../../utils/cart';

function CartTotal(): JSX.Element {
  const cartGuitars = useSelector(getCartGuitars);
  const cartCounter = useSelector(getCartCounter);
  const discount = useSelector(getDiscount);
  const totalPrice = getTotalPrice(cartGuitars, cartCounter);
  const discountSize = getDiscountSize(totalPrice, discount);
  const totalPriceWithDiscount = getTotalPriceWithDiscount(totalPrice, discount);

  return(
    <div className="cart__total-info">
      <p className="cart__total-item">
        <span className="cart__total-value-name">Всего:</span>
        <span className="cart__total-value">{formatter.format(totalPrice)} ₽</span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">Скидка:</span>
        <span className="cart__total-value cart__total-value--bonus">
          {getFomattedDiscount(discountSize)}
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">К оплате:</span>
        <span className="cart__total-value cart__total-value--payment">
          {formatter.format(totalPriceWithDiscount)} ₽
        </span>
      </p>
      <button className="button button--red button--big cart__order-button">Оформить заказ</button>
    </div>
  );
}

export default CartTotal;
