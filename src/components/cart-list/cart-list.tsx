import { useSelector } from 'react-redux';
import { getCartGuitars } from '../../store/cart-data/selectors';
import CartItem from '../cart-item/cart-item';
import './cart-list.css';

function CartList(): JSX.Element {
  const cartGuitars = useSelector(getCartGuitars);

  if (!cartGuitars.length) {
    return (
      <p className='cart__status'>Корзина пуста, добавьте товар</p>
    );
  }

  return(
    <ul className="cart-list">
      {cartGuitars.map((guitarData) => (
        <li className="cart-list__item" key={guitarData.id}>
          <CartItem {...guitarData} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
