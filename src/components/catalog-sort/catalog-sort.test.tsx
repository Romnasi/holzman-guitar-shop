import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CatalogSort from './catalog-sort';
import { mockGuitars, mockComments } from '../../const/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { defaultSortType } from '../../const/sort';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
    sortType: defaultSortType,
  },
});

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogSort />
        </Router>
      </Provider>);

    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
    expect(screen.getByText(/по цене/i)).toBeInTheDocument();
    expect(screen.getByText(/по популярности/i)).toBeInTheDocument();
  });
});
