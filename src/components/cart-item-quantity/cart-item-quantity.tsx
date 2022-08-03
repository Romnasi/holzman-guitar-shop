import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCartCounter } from '../../store/action';
import { getCartCounter } from '../../store/cart-data/selectors';
import { CartItemQuantityComponent } from '../../types/cart';
import { Cart } from '../../const/cart';

function CartItemQuantity({ id, handleModalOpen }: CartItemQuantityComponent): JSX.Element {
  const [counterValue, setCounterValue] = useState<'' | number>('');
  const dispatch = useDispatch();
  const count = useSelector(getCartCounter)[id.toString()];

  useEffect(() => {
    if (count && count !== counterValue) {
      setCounterValue(count);
    }
  }, []);

  useEffect(() => {
    if (counterValue === '') {
      dispatch(changeCartCounter({[id.toString()]: Cart.MIN_COUNT }));
      return;
    }
    dispatch(changeCartCounter({[id.toString()]: counterValue }));
  }, [counterValue, dispatch, id, count]);

  const handleIncreaseBtnClick = () => {
    if (counterValue !== '') {
      setCounter(counterValue + Cart.COUNT_STEP);
    }
  };

  const handleDecreaseBtnClick = () => {
    if (counterValue === Cart.MIN_COUNT) {
      handleModalOpen();
      return;
    }
    if (counterValue !== '') {
      setCounter(counterValue - Cart.COUNT_STEP);
    }
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const value = input.value;
    if (value === '') {
      setCounterValue('');
    } else {
      setCounter(Number(value));
    }
  };

  const setCounter = (value: number) => {
    if (value >= Cart.MIN_COUNT && value <= Cart.MAX_COUNT) {
      setCounterValue(value);
    }
    if (value === Cart.MIN_COUNT - 1) {
      handleModalOpen();
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
        value={counterValue}
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
