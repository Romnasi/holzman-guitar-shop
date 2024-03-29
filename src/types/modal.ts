import { AppRoute } from '../const/app-route';
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

export type ModalDeleteProductComponent = {
  isHiddenModal: boolean;
  productData: GuitarData;
  handleModalClose: () => void;
  handleDeleteButtonClick: () => void;
}

export type ModalSuccessAddComponent = {
  isHiddenModal: boolean;
  handleModalClose: () => void;
  pageRoute?: AppRoute;
}
