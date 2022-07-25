import Modal from '../modal/modal';
import { ModalSuccessAddComponent } from '../../types/modal';
import { useDispatch } from 'react-redux';
import { redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const/app-route';

function ModalSuccessAdd({ isHiddenModal, pageRoute, handleModalClose }: ModalSuccessAddComponent): JSX.Element {
  const dispatch = useDispatch();

  const handleContinueToBuyButton = () => {
    if (pageRoute === AppRoute.PRODUCT) {
      handleModalClose();
      setTimeout(() => dispatch(redirectToRoute(AppRoute.CATALOG)), 100);
      return;
    }
    handleModalClose();
  };

  return(
    <Modal
      isHiddenModal={isHiddenModal}
      handleModalClose={handleModalClose}
      modalClass='modal--success modal-success--add'
    >
      <>
        <svg className="modal__icon" width="26" height="20" aria-hidden="true">
          <use xlinkHref="#icon-success"></use>
        </svg>
        <p className="modal__message">Товар успешно добавлен в корзину</p>
        <div className="modal__button-container modal__button-container--add">
          <button
            className="button button--small modal__button"
            onClick={() => {
              handleModalClose();
              setTimeout(() => dispatch(redirectToRoute(AppRoute.CART)), 100);
            }}
          >
            Перейти в корзину
          </button>
          <button
            className="button button--black-border button--small modal__button modal__button--right"
            onClick={handleContinueToBuyButton}
          >
            Продолжить покупки
          </button>
        </div>
      </>
    </Modal>
  );
}

export default ModalSuccessAdd;
