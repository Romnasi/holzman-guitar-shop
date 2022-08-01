import { render, screen } from '@testing-library/react';
import ModalDeleteProduct from './modal-delete-product';
import { mockGuitars } from '../../const/mock';
import { GuitarType } from '../../const/modal';
import { GuitarTypes } from '../../types/card-data';
import userEvent from '@testing-library/user-event';

const mockGuitar = mockGuitars[0];
const { type, stringCount } = mockGuitar;

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const handleModalClose = jest.fn();
    const handleDeleteButtonClick = jest.fn();
    render(
      <ModalDeleteProduct
        isHiddenModal={false}
        productData={mockGuitar}
        handleModalClose={handleModalClose}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Удалить этот товар?/i);
    expect(screen.getByAltText(mockGuitar.name)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockGuitar.name);
    expect(screen.getByText(`${GuitarType[type as keyof GuitarTypes]}, ${stringCount} струнная`))
      .toBeInTheDocument();
  });

  it('should called handleDeleteButtonClick when user click button', () => {
    const handleModalClose = jest.fn();
    const handleDeleteButtonClick = jest.fn();
    render(
      <ModalDeleteProduct
        isHiddenModal={false}
        productData={mockGuitar}
        handleModalClose={handleModalClose}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />);

    userEvent.click(screen.getByText(/Удалить товар/i));
    expect(handleDeleteButtonClick).toBeCalledTimes(1);
  });

  it('should called handleModalClose when user click button "continue shopping"', () => {
    const handleModalClose = jest.fn();
    const handleDeleteButtonClick = jest.fn();
    render(
      <ModalDeleteProduct
        isHiddenModal={false}
        productData={mockGuitar}
        handleModalClose={handleModalClose}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />);

    userEvent.click(screen.getByText(/Продолжить покупки/i));
    expect(handleModalClose).toBeCalledTimes(1);
  });
});
