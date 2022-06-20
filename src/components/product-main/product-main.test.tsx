import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars, mockComments } from '../../const/mock';
import ProductMain from './product-main';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

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
  },
});

const someGuitarData = mockGuitars[0];

describe('Component: ProductMain', () => {
  it('should render correctly', () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
    history.push('/products/SO757575');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path='/products/:id' exact>
            <ProductMain />
          </Route>
        </Router>
      </Provider>);

    expect(screen.getByRole('heading', {level: 1}).textContent).toContain(someGuitarData.name);
    expect(screen.getByAltText(someGuitarData.name)).toBeInTheDocument();
    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});
