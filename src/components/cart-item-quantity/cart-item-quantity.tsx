import { useSelector, useDispatch } from 'react-redux';
import { changeCartCounter } from '../../store/action';
import { getCartCounter } from '../../store/cart-data/selectors';
import { CartItemQuantityComponent } from '../../types/cart';
import { Cart } from '../../const/cart';

function CartItemQuantity({ id, handleModalOpen }: CartItemQuantityComponent): JSX.Element {
  const dispatch = useDispatch();
  const count = useSelector(getCartCounter)[id.toString()];

  const handleIncreaseBtnClick = () => setCount(count + Cart.COUNT_STEP);
  const handleDecreaseBtnClick = () => {
    if (count === Cart.MIN_COUNT) {
      handleModalOpen();
      return;
    }
    setCount(count - Cart.COUNT_STEP);
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const value = Number(input.value);
    setCount(value);
  };

  const setCount = (value: number) => {
    if (value >= Cart.MIN_COUNT && value <= Cart.MAX_COUNT) {
      dispatch(changeCartCounter({[id]: value}));
    }
  };

  return(
    <div className="quantity cart-item__quantity">
      <button
        className="quantity__button"
        aria-label="Уменьшить количество"
        onClick={handleDecreaseBtnClick}
      >
        <svg width="8" height="8" aria-hidden="true">
          <use xlinkHref="#icon-minus"></use>
        </svg>
      </button>
      <input
        className="quantity__input"
        type="number"
        placeholder="1"
        id={`${id}-count`}
        name={`${id}-count`}
        min={0}
        max={99}
        value={count}
        onChange={handleInputChange}
      />
      <button
        className="quantity__button"
        aria-label="Увеличить количество"
        onClick={handleIncreaseBtnClick}
      >
        <svg width="8" height="8" aria-hidden="true">
          <use xlinkHref="#icon-plus"></use>
        </svg>
      </button>
    </div>
  );
}

export default CartItemQuantity;
