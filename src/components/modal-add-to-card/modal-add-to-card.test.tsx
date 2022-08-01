import { render, screen } from '@testing-library/react';
import ModalAddToCard from './modal-add-to-card';
import { mockGuitars } from '../../const/mock';
import { GuitarType } from '../../const/modal';
import { GuitarTypes } from '../../types/card-data';
import userEvent from '@testing-library/user-event';

const mockGuitar = mockGuitars[0];
const { type, stringCount } = mockGuitar;

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const handleModalClose = jest.fn();
    const handleAddGuitar = jest.fn();
    render(
      <ModalAddToCard
        isHiddenModal={false}
        productData={mockGuitar}
        handleModalClose={handleModalClose}
        handleAddGuitar={handleAddGuitar}
      />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Добавить товар в корзину/i);
    expect(screen.getByAltText(mockGuitar.name)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockGuitar.name);
    expect(screen.getByText(`${GuitarType[type as keyof GuitarTypes]}, ${stringCount} струнная`))
      .toBeInTheDocument();
  });

  it('should called handleAddGuitar when user click button', () => {
    const handleModalClose = jest.fn();
    const handleAddGuitar = jest.fn();
    render(
      <ModalAddToCard
        isHiddenModal={false}
        productData={mockGuitar}
        handleModalClose={handleModalClose}
        handleAddGuitar={handleAddGuitar}
      />);

    userEvent.click(screen.getByText(/Добавить в корзину/i));
    expect(handleAddGuitar).toBeCalledTimes(1);
  });
});
