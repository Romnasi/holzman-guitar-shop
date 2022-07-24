import Modal from '../modal/modal';
import { ModalSuccessAddComponent } from '../../types/modal';
import { useDispatch } from 'react-redux';
import { redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const/app-route';

function ModalSuccessAdd({ isHiddenModal, handleModalClose }: ModalSuccessAddComponent): JSX.Element {
  const dispatch = useDispatch();

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
            onClick={handleModalClose}
          >
            Продолжить покупки
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

export default ModalSuccessAdd;
