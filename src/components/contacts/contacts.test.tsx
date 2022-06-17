import { render, screen } from '@testing-library/react';
import Contacts from './contacts';

describe('Component: Contacts', () => {
  it('should render correctly', () => {
    render(<Contacts />);
  });

  expect(screen.getByText('Контакты')).toBeInTheDocument();
  expect(screen.getByText('г. Санкт-Петербург')).toBeInTheDocument();
  expect(screen.getByText('Режим работы')).toBeInTheDocument();
});
