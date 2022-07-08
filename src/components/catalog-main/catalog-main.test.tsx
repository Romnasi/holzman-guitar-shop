import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CatalogMain from './catalog-main';
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

describe('Component: CatalogMain', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogMain />
        </Router>
      </Provider>);

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
  });
});
