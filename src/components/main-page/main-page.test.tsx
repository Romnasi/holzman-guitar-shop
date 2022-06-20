import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainPage from './main-page';

const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <MainPage />
      </Router>);

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });
});
