import { render, screen } from '@testing-library/react';
import ProductCard from './product-card';
import { mockGuitars, mockComments } from '../../const/mock';
import { createMemoryHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const/app-route';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
  },
  CART: {
    guitars: [],
    counter: {},
  },
});

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    const testGuitarData = mockGuitars[0];
    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductCard { ...testGuitarData } />
        </Router>
      </Provider>);

    expect(screen.getAllByAltText(testGuitarData.name)[1]).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
    expect(screen.getByText('Купить')).toBeInTheDocument();
  });

  it('should redirect to ProductPage when user click "read more" button', () => {
    const testGuitarData = mockGuitars[0];
    history.push(AppRoute.CATALOG);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={`/products/${testGuitarData.vendorCode}`} exact>
              <h1>This is product page</h1>
            </Route>
            <Route path={AppRoute.CATALOG} exact>
              <ProductCard { ...testGuitarData } />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(screen.queryByText(/This is product page/i)).not.toBeInTheDocument();

    const readMoreButton = screen.getByText('Подробнее');
    userEvent.click(readMoreButton);
    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
  });
});
