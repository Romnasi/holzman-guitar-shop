import { render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
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

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={storeWithData}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Извините страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('Перейти на страницу каталога')).toBeInTheDocument();
  });
});
