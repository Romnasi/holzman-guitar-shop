import { render, screen } from '@testing-library/react';
import Contacts from './contacts';

describe('Component: Contacts', () => {
  it('should render correctly', () => {
    render(<Contacts />);

    expect(screen.getByText('Контакты')).toBeInTheDocument();
    expect(screen.getByText(/Санкт-Петербург/i)).toBeInTheDocument();
    expect(screen.getByText(/Режим работы/i)).toBeInTheDocument();
  });
});
