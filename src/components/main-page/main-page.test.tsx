import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainPage from './main-page';
import { mockGuitars } from '../../const/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const storeWithData = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
  },
  CART: {
    guitars: [],
    counter: {},
  },
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={storeWithData}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });
});
