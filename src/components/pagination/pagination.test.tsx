import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute } from '../../const/app-route';
import Pagination from './pagination';
import { PaginationData } from '../../const/pagination';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const guitarNumber = 27;

const store = mockStore({
  DATA: {
    curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
    guitarNumber,
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <Pagination />
    </Router>
  </Provider>
);

describe('Component: Pagination', () => {
  it('should render "Pagination" correctly if current pagination = 1 does not render "prev button"', () => {
    history.push(AppRoute.MAIN);

    render(fakeApp);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('pagination__list');

    expect(screen.getByText('1'))
      .toHaveClass('link pagination__page-link');

    expect(screen.queryByText('Назад')).not.toBeInTheDocument();
    const nextButton = screen.getByText('Далее');
    expect(nextButton).toBeInTheDocument();

    userEvent.click(nextButton);
    expect(screen.getByText('2'))
      .toHaveClass('link pagination__page-link');
  });
});
