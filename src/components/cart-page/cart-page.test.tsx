import { render, screen } from '@testing-library/react';
import CartPage from './cart-page';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
  },
  CART: {
    guitars: [],
    counter: {},
    coupon: '',
    discount: 0,
    couponStatus: null,
  },
});


const history = createMemoryHistory();

describe('Component: CartList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartPage />
        </Router>
      </Provider>);

    expect(screen.getByRole('heading', { level: 1})).toHaveTextContent('Корзина');
  });
});
