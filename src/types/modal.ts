export type ModalComponent = {
  children: JSX.Element;
  isHiddenModal: boolean;
  modalClass: string;
  handleModalClose: () => void;
}
