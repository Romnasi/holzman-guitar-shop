import './modal-add-to-card.css';
import Modal from '../modal/modal';
import { ModalAddToCardComponent } from '../../types/modal';
import { formatter, getBigImagePath } from '../../utils/catalog-product';
import { GuitarTypes } from '../../types/card-data';
import { GuitarType } from '../../const/modal';

function ModalAddToCard({
  isHiddenModal,
  productData,
  handleModalClose,
  handleAddGuitar,
}: ModalAddToCardComponent): JSX.Element {
  const { previewImg, name, vendorCode, stringCount, price, type } = productData;

  return(
    <Modal
      isHiddenModal={isHiddenModal}
      handleModalClose={handleModalClose}
      modalClass={'modal-cart--add'}
    >
      <>
        <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
        <div className="modal__info">
          <img
            className="modal__img"
            src={previewImg}
            srcSet={`${getBigImagePath(previewImg)} 2x`}
            width="67"
            height="137"
            alt={name}
          />
          <div className="modal__info-wrapper">
            <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
            <p className="modal__product-params modal__product-params--margin-11">Артикул: {vendorCode}</p>
            <p className="modal__product-params">
              {GuitarType[type as keyof GuitarTypes]}, {stringCount} струнная
            </p>
            <p className="modal__price-wrapper">
              <span className="modal__price">Цена:</span>
              <span className="modal__price">{formatter.format(price)} ₽</span>
            </p>
          </div>
        </div>
        <div className="modal__button-container">
          <button
            className="button button--red button--big modal__button modal__button--add"
            onClick={handleAddGuitar}
          >
            Добавить в корзину
          </button>
        </div>
        <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть">
          <span className="button-cross__icon"></span>
          <span className="modal__close-btn-interactive-area"></span>
        </button>
      </>
    </Modal>
  );
}

export default ModalAddToCard;
