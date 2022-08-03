import Modal from '../modal/modal';
import { ModalDeleteProductComponent } from '../../types/modal';
import { formatter, getBigImagePath } from '../../utils/catalog-product';
import { GuitarTypes } from '../../types/card-data';
import { GuitarType } from '../../const/modal';

function ModalDeleteProduct({
  isHiddenModal,
  productData,
  handleModalClose,
  handleDeleteButtonClick,
}: ModalDeleteProductComponent): JSX.Element {
  const { previewImg, name, vendorCode, stringCount, price, type } = productData;

  return(
    <Modal
      isHiddenModal={isHiddenModal}
      handleModalClose={handleModalClose}
      modalClass={'modal-cart--add'}
    >
      <>
        <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
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
            <h3 className="modal__product-name title title--little title--uppercase">
              {name}
            </h3>
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
            className="button button--small modal__button"
            onClick={() => {
              handleModalClose();
              setTimeout(() => handleDeleteButtonClick(), 100);
            }}
          >
            Удалить товар
          </button>

          <button
            className="button button--black-border button--small modal__button modal__button--right"
            onClick={handleModalClose}
          >
            Продолжить покупки
          </button>
        </div>
      </>
    </Modal>
  );
}

export default ModalDeleteProduct;
