import { useEffect, useRef } from 'react';
import { ModalComponent } from '../../types/modal';
import { Key } from '../../const/modal';

function Modal({ children, isHiddenModal, modalClass, handleModalClose }: ModalComponent): JSX.Element {
  const basicModalClass = `modal ${modalClass}`;
  const curModalClass = isHiddenModal ? basicModalClass : `${basicModalClass} is-active`;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (evt: KeyboardEvent) => {
      if(evt.key === Key.ESCAPE){
        handleModalClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  },[handleModalClose]);

  useEffect(() => {
    if (!isHiddenModal)  {
      document.body.style.overflow = 'hidden';
      document.body.style.maxHeight = '100vh';
      document.body.style.paddingRight = '17px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'none';
      document.body.style.paddingRight = '0';
    }
  }, [isHiddenModal]);

  useEffect(() => {
    const HandleModalKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === Key.TAB && ref.current) {
        const focusableModalElements = ref.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select');

        const firstElement = focusableModalElements[0] as HTMLElement;
        const lastElement =
          focusableModalElements[focusableModalElements.length - 1] as HTMLElement;

        if (!evt.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          return evt.preventDefault();
        }

        if (evt.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          evt.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', HandleModalKeyDown);
    return () => window.removeEventListener('keydown', HandleModalKeyDown);
  }, []);

  return(
    <div className={curModalClass}>
      <div className="modal__wrapper" ref={ref}>
        <div
          className="modal__overlay"
          onClick={() => handleModalClose()}
        >
        </div>
        <div className="modal__content">
          {children}

          <button
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
            onClick={() => handleModalClose()}
          >
            <span className="button-cross__icon"></span>
            <span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
