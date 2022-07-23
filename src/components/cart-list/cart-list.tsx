import './cart-list.css';

function CartList(): JSX.Element {
  return(
    <ul className="cart-list">
      <li className="cart-list__item">
        <div className="cart-item">
          <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
            <span className="button-cross__icon"></span>
            <span className="cart-item__close-button-interactive-area"></span>
          </button>
          <div className="cart-item__image">
            <img
              src="img/guitar-2.jpg"
              srcSet="img/guitar-2@2x.jpg 2x"
              width="55"
              height="130"
              alt="ЭлектроГитара Честер bass"
            />
          </div>
          <div className="product-info cart-item__info">
            <p className="product-info__title">ЭлектроГитара Честер bass</p>
            <p className="product-info__info">Артикул: SO757575</p>
            <p className="product-info__info">Электрогитара, 6 струнная</p>
          </div>
          <div className="cart-item__price">17 500 ₽</div>
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
      </li>
      <li className="cart-list__item">
        <div className="cart-item">
          <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
            <span className="button-cross__icon"></span>
            <span className="cart-item__close-button-interactive-area"></span>
          </button>
          <div className="cart-item__image">
            <img
              src="img/guitar-0.jpg"
              srcSet="img/guitar-0@2x.jpg 2x"
              width="55"
              height="130"
              alt="СURT Z30 Plus"
            />
          </div>
          <div className="product-info cart-item__info">
            <p className="product-info__title">СURT Z30 Plus</p>
            <p className="product-info__info">Артикул: SO754565</p>
            <p className="product-info__info">Электрогитара, 6 струнная</p>
          </div>
          <div className="cart-item__price">34 500 ₽</div>
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
              id="4-count"
              name="4-count"
              max="99"
            />
            <button className="quantity__button" aria-label="Увеличить количество">
              <svg width="8" height="8" aria-hidden="true">
                <use xlinkHref="#icon-plus"></use>
              </svg>
            </button>
          </div>
          <div className="cart-item__price-total">34 500 ₽</div>
        </div>
      </li>
    </ul>
  );
}

export default CartList;
