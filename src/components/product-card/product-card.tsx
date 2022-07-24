import { GuitarData } from '../../types/card-data';
import { formatter, getBigImagePath, capitalizeFirstLetter } from '../../utils/catalog-product';
import ProductRate from '../product-rate/product-rate';
import { Link } from 'react-router-dom';
import { CardType } from '../../const/rate';
import { useDispatch } from 'react-redux';
import { addGuitarToCard } from '../../store/action';
import { useState, useCallback } from 'react';
import ModalAddToCard from '../modal-add-to-card/modal-add-to-card';
import ModalSuccessAdd from '../modal-success-add/modal-success-add';

function ProductCard(props: GuitarData): JSX.Element {
  const [isHiddenModal, setIsHiddenModal] = useState(true);
  const [isHiddenModalSuccess, setIsHiddenModalSuccess] = useState(true);

  const { name, previewImg, price, type, rating, vendorCode, id } = props;
  const dispatch = useDispatch();

  const handleModalClose = useCallback(
    () => {
      setIsHiddenModal(true);
    }, [],
  );

  const handleModalSuccessClose = useCallback(
    () => {
      setIsHiddenModalSuccess(true);
    }, [],
  );

  const handleAddGuitar = () => {
    dispatch(addGuitarToCard(props));
    handleModalClose();
    setIsHiddenModalSuccess(false);
  };

  return (
    <article className="product-card">
      <ModalAddToCard
        productData={props}
        isHiddenModal={isHiddenModal}
        handleModalClose={handleModalClose}
        handleAddGuitar={handleAddGuitar}
      />

      <ModalSuccessAdd
        isHiddenModal={isHiddenModalSuccess}
        handleModalClose={handleModalSuccessClose}
      />

      <img
        src={previewImg}
        srcSet={`${getBigImagePath(previewImg)} 2x`}
        width="75"
        height="190"
        alt={name}
      />
      <div className="product-card__info">
        <ProductRate
          rating={rating}
          cardType={CardType.CATALOG}
          guitarId={id}
        />

        <p className="product-card__title">{name} {capitalizeFirstLetter(type)}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{formatter.format(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link
          className="button button--mini"
          to={`/products/${vendorCode}`}
        >
          Подробнее
        </Link>

        <button
          className="button button--red button--mini button--add-to-cart"
          onClick={() => setIsHiddenModal(false)}
        >
          Купить
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
