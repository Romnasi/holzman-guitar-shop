import { GuitarData } from './card-data';

export type ModalComponent = {
  children: JSX.Element;
  isHiddenModal: boolean;
  modalClass: string;
  handleModalClose: () => void;
}

export type ReviewSuccessComponent = {
  handleModalClose: () => void;
}

export type ModalAddToCardComponent = {
  isHiddenModal: boolean;
  productData: GuitarData;
  handleModalClose: () => void;
  handleAddGuitar: () => void;
}
