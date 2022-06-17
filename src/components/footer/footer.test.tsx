import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Component: Contacts', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Footer />
      </Router>);

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
    expect(screen.getByText(/Информация/i)).toBeInTheDocument();
    expect(screen.getByText(/Режим работы/i)).toBeInTheDocument();
  });
});
