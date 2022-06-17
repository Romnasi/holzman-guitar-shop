import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Contacts', () => {
  it('should render correctly', () => {
    render(<Footer />);
  });

  expect(screen.getByAltText('Логотип')).toBeInTheDocument();
  expect(screen.getByText('Контакты')).toBeInTheDocument();
  expect(screen.getByText('Информация')).toBeInTheDocument();
  expect(screen.getByText('Режим работы')).toBeInTheDocument();
});
