import { render, screen } from '@testing-library/react';
import ReviewSuccess from './review-success';

const cb = jest.fn();

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(<ReviewSuccess handleModalClose={cb}/>);

    expect(screen.getByText(/Спасибо за ваш отзыв!/i)).toBeInTheDocument();
    expect(screen.getByText(/К покупкам!/i)).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button button--small modal__button modal__button--review');
    expect(button).toBeInTheDocument();
  });
});
