import {render, screen} from '@testing-library/react';
import CatalogFilter from './catalog-filter';
import { mockGuitars, mockComments } from '../../const/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { defaultSortType } from '../../const/sort';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const cardData = mockGuitars.slice(0, 2);

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: cardData,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
    sortType: defaultSortType,
  },
  FILTER: {
    priceMin: '',
    priceMax: '',
    isActive: false,
    guitarType: {
      acoustic: false,
      electric: false,
      ukulele: false,
    },
    strings: {
      fourStrings: false,
      sixStrings: false,
      sevenStrings: false,
      twelveStrings: false,
    },
  },
});

describe('Component: CatalogFilter', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogFilter />
        </Router>
      </Provider>);

    expect(screen.getByText(/Фильтр/i)).toBeInTheDocument();
    expect(screen.getByText(/Минимальная цена/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество струн/i)).toBeInTheDocument();
  });
});
