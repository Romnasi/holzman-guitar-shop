import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ProductPage from './product-page';
import {mockGuitars, mockComments} from '../../const/mock';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const someGuitarData = mockGuitars[0];
const someGuitarId = mockGuitars[0].vendorCode;

const storeWithoutData = mockStore({
  DATA: {
    isDataLoaded: false,
    isCommentsLoaded: false,
  },
});

const storeWithData = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: someGuitarData,
  },
});

describe('Component: ProductPage', () => {

  it('If the data is not loaded should render Loader', () => {
    history.push(`/products/${someGuitarId}`);
    render(
      <Provider store={storeWithoutData}>
        <Router history={history}>
          <Switch>
            <Route path={'/products/:id'} exact>
              <ProductPage />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument();
    expect(screen.queryByText(someGuitarData.name)).not.toBeInTheDocument();
  });

  it('If the data is loaded should render CatalogPage without Loader', () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

    history.push(`/products/${someGuitarId}`);
    render(
      <Provider store={storeWithData}>
        <Router history={history}>
          <Switch>
            <Route path={'/products/:id'} exact>
              <ProductPage />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(screen.queryByText(/Загрузка/i)).not.toBeInTheDocument();
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(someGuitarData.name);
  });
});
